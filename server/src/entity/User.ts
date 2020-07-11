import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from "typeorm";
import {Ticket} from './Ticket'

@Entity()
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        default: false
    })
    is_email_verified: boolean;


    @OneToMany(type => Ticket, ticket => ticket.user_id)
    @Column({
        default: []
    })
    ticket_wallet: Ticket[]
}