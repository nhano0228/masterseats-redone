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

    @Column("decimal", {scale: 2})
    price: number;

    @Column({
        default: "Available"
    })
    status: TicketStatus;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_seller_transfer: boolean;

    @ManyToOne(() => User, (user: User) => user.ticket_wallet, {eager: true})
    seller: User;

    @ManyToOne(() => User, (user: User) => user.ticket_purchases, {eager: true})
    buyer?: User;

    @Column({type: "varchar", nullable: true})
    transactionId?: string;

    @Column({
        type: "boolean",
        default: false
    })
    confirmed_buyer_transfer: boolean;
}
