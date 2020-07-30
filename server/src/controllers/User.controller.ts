import { Controller, Get, Route, Body, Post, Security, Request, Put } from 'tsoa';
import {User} from '../entity/User'
import {Ticket} from '../entity/Ticket'
import {getRepository, getConnection, getCustomRepository} from 'typeorm'
import {Request as ExRequest} from 'express'
import { SignUpBody, LoginBody, ChangePassword, EmailTemplates, VerifyEmailBody, ForgotPasswordBody } from '../config/types';
import * as jwt from "jsonwebtoken";
import {jwtSecret, getFromJWT, verifyToken, stripe, gateway} from '../config'
import { TicketRepository } from '../repositories/TicketRepository'; 
import {MailService} from '../mail';
import { ApiError } from '../config/ApiError';

@Route('user/')
export class UserController extends Controller {

    @Post('login')
    public async login(@Body() request: LoginBody): Promise<string> {
        var findUser;
        try {
            findUser = await getRepository(User).findOneOrFail({email: request.email})
        } catch (err) {
            throw new ApiError('User does not exist', 401, err.message)
        }

        if (!findUser.checkIfUnencryptedPasswordIsValid(request.password)) {
            throw new ApiError('Incorrect Password', 401)
        }
        
        if (!findUser.is_email_verified) {
            throw new ApiError('Email is not verified', 410)
        }

        return this.signToken(findUser)
    }

    @Post('register')
    public async register(@Body() request: SignUpBody, @Request() req: ExRequest): Promise<void> {
        const createUser = new User()
        createUser.email = request.email
        createUser.password = request.password
        createUser.first_name = request.first_name
        createUser.last_name = request.last_name
        createUser.hashPassword()

        var token: string
        try {
            const account = await gateway.customer.create({
                firstName: createUser.first_name,
                lastName: createUser.last_name,
                email: createUser.email
              })

            console.log(account)

            createUser.payment_id = account.customer.id

            token = jwt.sign({   
                    email: createUser.email, 
                    email_verified: createUser.is_email_verified,
                    first_name: createUser.first_name, 
                    last_name: createUser.last_name,
                    id: createUser.id,
                    payment_id: createUser.payment_id,
                },
                jwtSecret,
                {}
            )
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values(createUser)
                .execute()
          } catch (err) {
            console.log(err)
            throw new ApiError('Error while signing up', 401, err.message)
          }
        
        const mail = new MailService()
        mail.sendMail(createUser, EmailTemplates.SignUpConfirmation, {
            user: createUser,
            link: "https://masterseats-client.vercel.app/verification?token=" + token
        })
    }

    @Security('bearer')
    @Get('client-token')
    public async getClientToken(@Request() request: ExRequest): Promise<string> {
        const jwt_info = await getFromJWT(request, ["payment_id"], this)
        const token = await gateway.clientToken.generate({customerId: jwt_info["payment_id"]})
        return token.clientToken
    }

    @Put('verify-email')
    public async verifyEmail(@Body() body: VerifyEmailBody): Promise<string> {
        const userRepository = getRepository(User);
        try {
            const email = await verifyToken(body.id, this)
            await getRepository(User).update({email}, {is_email_verified: true})
            const user = await userRepository.findOneOrFail({email});
            return this.signToken(user)
        } catch (error) {
            throw new ApiError('Error while retrieving user', 401, error.message)
        }
    }

    @Security('bearer')
    @Get('is-email-verified')
    public async isEmailVerified(@Request() request: ExRequest): Promise<boolean> {
        const userRepository = getRepository(User);
        try {
            const jwt_info = await getFromJWT(request, ["id"], this)
            const user = await userRepository.findOneOrFail({id: jwt_info.id});
            return user.is_email_verified
        } catch (error) {
            throw new ApiError('Error while retrieving user', 401, error.message)
        }
    }

    @Security('bearer')
    @Get('get-user')
    public async getUser(@Request() request: ExRequest): Promise<User> {
        const jwt_info = await getFromJWT(request, ["id"], this)
        try {
            const user = await getRepository(User).findOneOrFail({id: jwt_info.id})
            return user
        } catch (err) {
            throw new ApiError('Error while trying to find user', 401, err.message)
        }
    }

    @Post('forgot-password-email')
    public async forgotPasswordEmail(@Body() body: ForgotPasswordBody): Promise<void> {
        try {
            const user = await getRepository(User).findOneOrFail({email: body.email})
            const token = jwt.sign({   
                    email: user.email, 
                    email_verified: user.is_email_verified,
                    first_name: user.first_name, 
                    last_name: user.last_name,
                    id: user.id,
                    payment_id: user.payment_id,
                },
                jwtSecret,
                {}
            )
            const mail = new MailService()
            mail.sendMail(user, EmailTemplates.PasswordReset, {
                email: body.email,
                link: "https://masterseats-client.vercel.app/resetpassword?token=" + token
            })
        } catch (err) {
            throw new ApiError('Error while trying to find user', 401, err.message)
        }

    }

    @Post('change-password')
    public async changePassword(@Body() body: ChangePassword): Promise<string> {
        const { token, new_password } = body;
        const userRepository = getRepository(User);
        var user: User;
        try {
            const email = await verifyToken(token, this)
            user = await userRepository.findOneOrFail({email});
        } catch (err) {
            throw new ApiError('User does not exist', 401, err.message)
        }

        user.password = new_password;        
        user.hashPassword();
        userRepository.save(user);

        return this.signToken(user)
    }

    @Security('bearer')
    @Post('change-password-profile')
    public async changePasswordFromProfile(@Request() request: ExRequest): Promise<void> {
        const { new_password } = request.body;
        const userRepository = getRepository(User);
        var user: User;
        try {
            const jwt_info = await getFromJWT(request, ["id"], this)
            user = await userRepository.findOneOrFail(jwt_info["id"]);
        } catch (err) {
            throw new ApiError('User does not exist', 401, err.message)
        }

        user.password = new_password;        
        user.hashPassword();
        userRepository.save(user);
    }

    @Security('bearer')
    @Get('get-ticket-wallet')
    public async getTicketWallet(@Request() request: ExRequest): Promise<Ticket[]> {
        try {
            const jwt_info = await getFromJWT(request, ["id"], this)
            const tickets = await getCustomRepository(TicketRepository).find({
                relations: ['seller'],
                where: { seller: { id: jwt_info["id"] } },
              })
            return tickets
        } catch (error) {
            throw new ApiError('Error while trying to retrieve ticket', 401, error.message)
        }
    }

    private signToken(user: User): string {
        return jwt.sign({   
            email: user.email, 
            email_verified: user.is_email_verified,
            first_name: user.first_name, 
            last_name: user.last_name,
            id: user.id,
            payment_id: user.payment_id
        },
        jwtSecret,
        { expiresIn: "1h" }
    )
    }

}
