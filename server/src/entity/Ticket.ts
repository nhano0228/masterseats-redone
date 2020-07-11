import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from './User'
import {TicketStatus, MichiganFootballGame, FilterOptions} from '../types'

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    game: MichiganFootballGame;

    @Column("integer")
    section: number;

    @Column("double")
    price: number;

    @Column({
        default: TicketStatus.Open
    })
    status: TicketStatus;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_seller_transfer: boolean;

    @ManyToOne(type => User, user => user.ticket_wallet)
    user_id: User;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_buyer_transfer: boolean;
}
