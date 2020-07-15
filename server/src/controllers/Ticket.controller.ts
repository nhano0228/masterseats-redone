import { Controller, Post, Route, Security, Body, Get, Request } from 'tsoa';
import {Request as ExRequest} from 'express'
import {Ticket} from '../entity/Ticket'
import {User} from '../entity/User'
import {getCustomRepository, getConnection, getRepository} from 'typeorm'
import {jwtSecret, getFromJWT} from '../config'
import { 
    FilterOptions, 
    MichiganFootballGame, 
    TicketStatus, 
    SortTicketsBody, 
    PostTicketBody,
    RemoveTicketBody
    } from '../config/types';
import { TicketRepository } from '../repositories/TicketRepository';
import jwt from 'jsonwebtoken'

@Route('ticket/')
export class TicketController extends Controller {

    @Post('sort-tickets')
    public async sortTickets(@Body() request: SortTicketsBody): Promise<Ticket[]> {
        const {game, filter} = request
        const ticket_arr = await getCustomRepository(TicketRepository).sortByGameAndFilter(game, filter)

        return ticket_arr
    }

    @Security('bearer')
    @Post('post-ticket')
    public async postTicket(@Body() body: PostTicketBody, @Request() request: ExRequest) {
        const jwt_info = await getFromJWT(request, ['id'], this)

        const createTicket = new Ticket()
        createTicket.game = body.game
        createTicket.price = body.price
        createTicket.section = body.section

        try {
            createTicket.user = await getRepository(User).findOneOrFail(jwt_info['id'])
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Ticket)
                .values(createTicket)
                .execute()
            return {
                message: "Successfully posted ticket."
            }
          } catch (err) {
            this.setStatus(401)
            throw new Error('Error while posting ticket: ' + err)
          }
    }

    @Security('bearer')
    @Post('remove-ticket')
    public async removeTicket(@Body() body: RemoveTicketBody) {
        try {
            await getConnection()
                .createQueryBuilder()
                .delete()
                .from(Ticket)
                .where("id = :id", { id: body.id })
                .execute()
            return {
                message: "Successfully removed ticket."
            }
          } catch (err) {
            this.setStatus(401)
            throw new Error('Error while deleting ticket: ' + err)
          }
    }
}
