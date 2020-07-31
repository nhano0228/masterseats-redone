import {EntityRepository, Repository} from "typeorm";
import {Ticket} from "../entity/Ticket";
import { MichiganFootballGame, FilterOptions, TicketStatus } from "../config/types";

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket> {
    sortByGameAndFilter(game?: MichiganFootballGame, filter?: FilterOptions) {
        if (game === undefined && filter === undefined) {
            return
        }
        
        var res = this.createQueryBuilder("ticket")
        if (game !== undefined) {
            res = res.where("ticket.game = :game", {game})
                    .andWhere("ticket.status = :status", { status: TicketStatus.Open })
        }

        if (filter !== undefined) {
            switch (filter) {
                case FilterOptions.HighestLowest:
                    res = res.orderBy('price', "DESC")
                    break;
                case FilterOptions.LowestHighest:
                    res = res.orderBy('price', "ASC")
                    break;
                case FilterOptions.HighestSection:
                    res = res.orderBy('section', "DESC")
                    break;
                case FilterOptions.LowestSection:
                    res = res.orderBy('section', "ASC")
                    break;
            }         
        }
        return res.getMany()
    }

    sortByGameAndFilterAndToken(id: string, game?: MichiganFootballGame, filter?: FilterOptions) {
        if (game === undefined && filter === undefined) {
            return
        }
        
        var res = this.createQueryBuilder("ticket")
        if (game !== undefined) {
            res = res.where(`ticket."sellerId" != :id`, {id})
                    .andWhere("ticket.game = :game", {game})
                    .andWhere("ticket.status = :status", { status: TicketStatus.Open })
        } else {
            res = res.where(`ticket."sellerId" != :id`, {id})
                    .andWhere("ticket.status = :status", { status: TicketStatus.Open })
        }

        if (filter !== undefined) {
            switch (filter) {
                case FilterOptions.HighestLowest:
                    res = res.orderBy('price', "DESC")
                    break;
                case FilterOptions.LowestHighest:
                    res = res.orderBy('price', "ASC")
                    break;
                case FilterOptions.HighestSection:
                    res = res.orderBy('section', "DESC")
                    break;
                case FilterOptions.LowestSection:
                    res = res.orderBy('section', "ASC")
                    break;
            }         
        }
        
        return res.getMany()
    }

}