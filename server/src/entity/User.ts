import {Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany} from "typeorm";
import {Ticket} from './Ticket'
import * as bcrypt from "bcryptjs";

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

    @Column()
    payment_id: string;

    @Column({
        default: false
    })
    is_email_verified: boolean;

    @OneToMany(() => Ticket, (ticket: Ticket) => ticket.seller)
    ticket_wallet: Ticket[]

    @OneToMany(() => Ticket, (ticket: Ticket) => ticket.buyer)
    ticket_purchases: Ticket[]

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}