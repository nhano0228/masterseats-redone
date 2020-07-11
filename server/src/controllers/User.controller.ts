import { Controller, Get, Route, Security, Post } from 'tsoa';
import {User} from '../entity/User'
import {getRepository} from 'typeorm'

@Route('user/')
export class UserController extends Controller {

    @Get('{userId}')
    public async index(userId: string) {
        const user = await getRepository(User).findOneOrFail({id: userId})

        return user
    }
}
