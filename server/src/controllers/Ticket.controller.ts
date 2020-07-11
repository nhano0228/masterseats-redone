import { Controller, Post, Route, Security, Body } from 'tsoa';
import {Ticket} from '../entity/Ticket'
import {getCustomRepository} from 'typeorm'
import { FilterOptions, MichiganFootballGame, TicketStatus } from '../types';
import { TicketRepository } from '../repositories/TicketRepository';

@Route('ticket/')
export class TicketController extends Controller {

    @Post('sort-tickets')
    public async sortTickets(@Body() request: {game?: MichiganFootballGame, filter?: FilterOptions}) {
        const {game, filter} = request
        const ticket_arr = await getCustomRepository(TicketRepository).sortByGameAndFilter(game, filter)

        return ticket_arr
    }

}
