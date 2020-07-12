import { Controller, Get, Route, Body, Post, Security, Request, Put } from 'tsoa';
import {User} from '../entity/User'
import {Ticket} from '../entity/Ticket'
import {getRepository, getConnection, getCustomRepository} from 'typeorm'
import {Request as ExRequest} from 'express'
import { SignUpBody, LoginBody, ChangePassword, EmailTemplates } from '../config/types';
import * as jwt from "jsonwebtoken";
import {jwtSecret, getFromJWT} from '../config'
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
            token = this.signToken(createUser)
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

    @Security('bearer')
    @Put('verify-email')
    public async verifyEmail(@Request() request: ExRequest): Promise<string> {
        try {
            const jwt_info = await getFromJWT(request, ["id"], this)
            await getConnection()
                    .createQueryBuilder()
                    .update(User)
                    .set({ is_email_verified: true })
                    .where("id = :id", { id: jwt_info.id })
                    .execute();
            return request.headers.authorization.replace('Bearer ', '')
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while retrieving tickets: ' + error)
        }
    }

    @Get('get-user-by-id/{userId}')
    public async getUserById(userId: string): Promise<User> {
        try {
            const user = await getRepository(User).findOneOrFail({id: userId})
            return user
        } catch (err) {
            this.setStatus(401)
            throw new Error('User does not exist: ' + err)
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
