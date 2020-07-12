import {EntityRepository, Repository} from "typeorm";
import {Ticket} from "../entity/Ticket";
import { MichiganFootballGame, FilterOptions } from "../config/types";

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket> {
    sortByGameAndFilter(game?: MichiganFootballGame, filter?: FilterOptions) {
        if (game === undefined && filter === undefined) {
            return
        }
        
        var res = this.createQueryBuilder("ticket")
        if (game !== undefined) {
            res = res.where("ticket.game = :game", {game})
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