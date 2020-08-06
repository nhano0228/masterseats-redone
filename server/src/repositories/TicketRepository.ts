import {EntityRepository, Repository, Brackets} from "typeorm";
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

    getTicketWallet(id: string) {
        const res = this.createQueryBuilder("ticket")
                    .where(`ticket."sellerId" = :id`, {id})
                    .andWhere(`ticket.status != :status`, {status: TicketStatus.Removed})

        return res.getMany()
    }

    getOrders(id: string) {
        const res = this.createQueryBuilder("ticket")
                    .where(`ticket."buyerId" = :id`, {id})

        return res.getMany()
    }

}