import { Controller, Get, Route, Body, Post, Security, Request, Put } from 'tsoa';
import {User} from '../entity/User'
import {Ticket} from '../entity/Ticket'
import {getRepository, getConnection, getCustomRepository} from 'typeorm'
import {Request as ExRequest} from 'express'
import { SignUpBody, LoginBody, ChangePassword, EmailTemplates, VerifyEmailBody } from '../config/types';
import * as jwt from "jsonwebtoken";
import {jwtSecret, getFromJWT, verifyToken} from '../config'
import { TicketRepository } from '../repositories/TicketRepository'; 
import {MailService} from '../mail';

@Route('user/')
export class UserController extends Controller {

    @Post('login')
    public async login(@Body() request: LoginBody): Promise<string> {
        var findUser;
        try {
            findUser = await getRepository(User).findOneOrFail({email: request.email})
        } catch (err) {
            this.setStatus(401)
            throw new Error('User does not exist: ' + err)
        }

        if (!findUser.checkIfUnencryptedPasswordIsValid(request.password)) {
            this.setStatus(401)
            throw new Error('Incorrect Password')
        }

        return this.signToken(findUser)
    }

    @Post('register')
    public async register(@Body() request: SignUpBody): Promise<string> {
        const createUser = new User()
        createUser.email = request.email
        createUser.password = request.password
        createUser.first_name = request.first_name
        createUser.last_name = request.last_name

        var token: string
        try {
            createUser.hashPassword()
            token = jwt.sign({   
                    email: createUser.email, 
                    email_verified: createUser.is_email_verified,
                    first_name: createUser.first_name, 
                    last_name: createUser.last_name,
                    id: createUser.id,
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
            this.setStatus(401)
            throw new Error('Error while signing up: ' + err)
          }
        
        const mail = new MailService()
        mail.sendMail(createUser, EmailTemplates.SignUpConfirmation, {
            user: createUser,
            link: "https://masterseats-client.vercel.app/verification?token=" + token
        })

        return token
    }

    @Put('verify-email')
    public async verifyEmail(@Body() body: VerifyEmailBody): Promise<string> {
        const userRepository = getRepository(User);
        try {
            const id = await verifyToken(body.id, this)
            await getConnection()
                    .createQueryBuilder()
                    .update(User)
                    .set({ is_email_verified: true })
                    .where("id = :id", { id })
                    .execute();
            const user = await userRepository.findOneOrFail(id);
            return this.signToken(user)
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while retrieving user: ' + error)
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
            this.setStatus(401)
            throw new Error('Error while retrieving user: ' + error)
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
            this.setStatus(401)
            throw new Error('Error trying to find user: ' + err)
        }
    }

    @Security('bearer')
    @Post('change-password')
    public async changePassword(@Body() req: ChangePassword): Promise<string> {
        const { old_password, password, email } = req;
        const userRepository = getRepository(User);
        var user: User;
        try {
            user = await userRepository.findOneOrFail({email: email});
        } catch (err) {
            this.setStatus(401)
            throw new Error('User does not exist: ' + err)
        }

        if (!user.checkIfUnencryptedPasswordIsValid(old_password)) {
            this.setStatus(401)
            throw new Error('Old password is not correct.')
        }

        user.password = password;        
        user.hashPassword();
        userRepository.save(user);

        return this.signToken(user)
    }

    @Security('bearer')
    @Get('get-ticket-wallet')
    public async getTicketWallet(@Request() request: ExRequest): Promise<Ticket[]> {
        try {
            const jwt_info = await getFromJWT(request, ["id"], this)
            const tickets = await getCustomRepository(TicketRepository).find({
                relations: ['user'],
                where: { user: { id: jwt_info["id"] } },
              })
            return tickets
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while retrieving tickets: ' + error)
        }
    }

    private signToken(user: User): string {
        return jwt.sign({   
            email: user.email, 
            email_verified: user.is_email_verified,
            first_name: user.first_name, 
            last_name: user.last_name,
            id: user.id,
        },
        jwtSecret,
        { expiresIn: "1h" }
    )
    }
}
