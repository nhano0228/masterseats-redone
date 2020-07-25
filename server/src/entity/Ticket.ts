import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {User} from './User'
import {TicketStatus, MichiganFootballGame, FilterOptions} from '../config/types'

@Entity()
export class Ticket {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    game: MichiganFootballGame;

    @Column("integer")
    section: number;

    @Column("decimal")
    price: number;

    @Column({
        default: "Open"
    })
    status: TicketStatus;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_seller_transfer: boolean;

    @ManyToOne(() => User, (user: User) => user.ticket_wallet)
    user: User;

    @ManyToOne(() => User, (user: User) => user.ticket_wallet)
    buyer?: User;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_buyer_transfer: boolean;
}
