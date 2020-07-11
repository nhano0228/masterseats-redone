import { Controller, Get, Route, Body, Post, Security, Request } from 'tsoa';
import {User} from '../entity/User'
import {getRepository, getConnection} from 'typeorm'
import {Response} from 'express'
import { SignUpBody, LoginBody, ChangePassword } from '../config/types';
import * as jwt from "jsonwebtoken";
import {jwtSecret} from '../config'

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
        var createUser = new User()
        createUser.email = request.email
        createUser.password = request.password
        createUser.first_name = request.first_name
        createUser.last_name = request.last_name

        try {
            createUser.hashPassword()
            const token = this.signToken(createUser)
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(User)
                .values(createUser)
                .execute()
            return token
          } catch (err) {
            this.setStatus(401)
            throw new Error('Error while signing up: ' + err)
          }
    }

    @Get('{userId}')
    public async findUser(userId: string): Promise<User> {
        try {
            const user = await getRepository(User).findOneOrFail({id: userId})
            return user
        } catch (err) {
            this.setStatus(401)
            throw new Error('User does not exist: ' + err)
        }
    }

    @Security('bearer')
    @Post('/change-password')
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
