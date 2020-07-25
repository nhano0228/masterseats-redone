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
    RemoveTicketBody,
    CheckoutTicket,
    EmailTemplates
    } from '../config/types';
import {stripe} from '../config'
import { TicketRepository } from '../repositories/TicketRepository';
import jwt from 'jsonwebtoken'
import {MailService} from '../mail'

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
            createTicket.seller = await getRepository(User).findOneOrFail(jwt_info['id'])
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

    @Security('bearer')
    @Post('checkout-ticket')
    public async checkoutTicket(@Body() body: CheckoutTicket) {
        try {
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})
            const user = ticket.seller
            const price = Math.trunc(ticket.price*100)
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [{
                    name: ticket.id,
                    amount: price,
                    currency: 'usd',
                    quantity: 1,
                }],
                success_url: 'success url',
                cancel_url: 'failure url',
            });
            return session.id
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while making this transaction:' + error)
        }
    }

    @Security('bearer')
    @Post('order-confirmation')
    public async orderConfirmation(@Body() body: CheckoutTicket, @Request() request: ExRequest) {
        const jwt_info = await getFromJWT(request, ['id'], this)
        try {
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})
            const seller = ticket.seller
            const buyer = await getRepository(User).findOneOrFail(jwt_info['id'])
            await getRepository(Ticket).update({id: body.ticket_id}, {buyer, status: TicketStatus.PendingTransfer})
            
            const mail = new MailService()
            mail.sendMail(seller, EmailTemplates.SellerTransfer, {
                user: seller,
                ticket,
                link: "Something?"
            })

            mail.sendMail(buyer, EmailTemplates.OrderConfirmation, {
                user: buyer,
                ticket,
                link: "Something?"
            })
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while confirming an order:' + error)
        }
    }

    @Security('bearer')
    @Post('transferred-ticket-seller-confirmation')
    public async transferredTicketSellerConfirmation(@Body() body: CheckoutTicket) {
        try {
            await getRepository(Ticket).update({id: body.ticket_id}, {confirmed_seller_transfer: true})
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})

            const mail = new MailService()

            mail.sendMail(ticket.buyer, EmailTemplates.OrderConfirmation, {
                user: ticket.buyer,
                ticket,
                link: "Something?"
            })
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while confirming transfer by seller:' + error)
        }
    }

    @Security('bearer')
    @Post('transferred-ticket-buyer-confirmation')
    public async transferredTicketBuyerConfirmation(@Body() body: CheckoutTicket) {
        try {
            await getRepository(Ticket).update({id: body.ticket_id}, {confirmed_seller_transfer: true, status: TicketStatus.CompletedTransfer})
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})
            const price = Math.trunc(ticket.price*100)

            const transfer = await stripe.transfers.create({
                amount: price,
                currency: "usd",
                destination: ticket.seller.stripe_id,
              });
        } catch (error) {
            this.setStatus(401)
            throw new Error('Error while confirming transfer by buyer:' + error)
        }
    }
}
