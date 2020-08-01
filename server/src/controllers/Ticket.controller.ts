import { Controller, Post, Route, Security, Body, Get, Request } from 'tsoa';
import {Request as ExRequest} from 'express'
import {Ticket} from '../entity/Ticket'
import {User} from '../entity/User'
import {getCustomRepository, getConnection, getRepository} from 'typeorm'
import {jwtSecret, getFromJWT, gateway, client_hyperwallet, STARTING_LINK} from '../config'
import { 
    FilterOptions, 
    MichiganFootballGame, 
    TicketStatus, 
    SortTicketsBody, 
    PostTicketBody,
    RemoveTicketBody,
    CheckoutTicket,
    EmailTemplates,
    OrderConfirmation
    } from '../config/types';
import { TicketRepository } from '../repositories/TicketRepository';
import jwt from 'jsonwebtoken'
import {MailService} from '../mail'
import {ApiError} from '../config/ApiError'

@Route('ticket/')
export class TicketController extends Controller {

    @Post('sort-tickets')
    public async sortTickets(@Body() body: SortTicketsBody, @Request() req: ExRequest): Promise<Ticket[]> {
        const {game, filter} = body
        var ticket_arr = await getCustomRepository(TicketRepository).sortByGameAndFilter(game, filter)
        return ticket_arr
    }

    @Security('bearer')
    @Post('sort-tickets-secure')
    public async sortTicketsSecure(@Body() body: SortTicketsBody, @Request() req: ExRequest): Promise<Ticket[]> {
        const {game, filter} = body
        const jwt_info = await getFromJWT(req, ['id'], this)
        const ticket_arr = await getCustomRepository(TicketRepository).sortByGameAndFilterAndToken(jwt_info["id"], game, filter)
        return ticket_arr
    }

    @Security('bearer')
    @Get('get-pending-tickets')
    public async getPendingTickets(@Request() req: ExRequest): Promise<Ticket[]> {
        const jwt_info = await getFromJWT(req, ['id'], this)
        const ticket_arr = await getCustomRepository(TicketRepository).getTicketsByStatus(jwt_info["id"], TicketStatus.PendingTransfer)
        return ticket_arr
    }

    @Security('bearer')
    @Get('get-completed-tickets')
    public async getCompletedTickets(@Request() req: ExRequest): Promise<Ticket[]> {
        const jwt_info = await getFromJWT(req, ['id'], this)
        const ticket_arr = await getCustomRepository(TicketRepository).getTicketsByStatus(jwt_info["id"], TicketStatus.CompletedTransfer)
        return ticket_arr
    }

    @Security('bearer')
    @Post('refund-ticket')
    public async refundTicket(@Body() body: RemoveTicketBody): Promise<void> {
        const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.id})
        await gateway.transaction.refund(ticket.transactionId)
        await getRepository(Ticket).update({id: body.id}, {confirmed_seller_transfer: false, confirmed_buyer_transfer: false, buyer: null, status: TicketStatus.Open})
    }

    @Security('bearer')
    @Post('post-ticket')
    public async postTicket(@Body() body: PostTicketBody, @Request() request: ExRequest): Promise<void> {
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
          } catch (err) {
            throw new ApiError('Error while posting ticket', 401, err.message)
          }
    }

    @Security('bearer')
    @Post('remove-ticket')
    public async removeTicket(@Body() body: RemoveTicketBody): Promise<void> {
        try {
            await getConnection()
                .createQueryBuilder()
                .delete()
                .from(Ticket)
                .where("id = :id", { id: body.id })
                .execute()
          } catch (err) {
            throw new ApiError('Error while deleting ticket', 401, err.message)
          }
    }

    @Security('bearer')
    @Post('order-confirmation')
    public async orderConfirmation(@Body() body: OrderConfirmation, @Request() request: ExRequest): Promise<void> {
        const jwt_info = await getFromJWT(request, ['id'], this)
        try {
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})
            const seller = ticket.seller
            const buyer = await getRepository(User).findOneOrFail(jwt_info['id'])
            const price = ticket.price * 1.05

            const sale = await gateway.transaction.sale({
                amount: price + "",
                paymentMethodNonce: body.nonce,
                options: {
                  submitForSettlement: true
                }
            })

            console.log(sale.transaction.id)

            await getRepository(Ticket).update({id: body.ticket_id}, {transactionId: sale.transaction.id, buyer, status: TicketStatus.PendingTransfer})
            
            const mail = new MailService()
            mail.sendMail(seller, EmailTemplates.SellerTransfer, {
                user: seller,
                buyer,
                ticket,
                link: STARTING_LINK + "ticketwallet"
            })

            mail.sendMail(buyer, EmailTemplates.OrderConfirmation, {
                user: buyer,
                ticket
            })
        } catch (error) {
            throw new ApiError('Error while confirming an order', 401, error.message)
        }
    }

    @Security('bearer')
    @Post('transferred-ticket-seller-confirmation')
    public async transferredTicketSellerConfirmation(@Body() body: CheckoutTicket) {
        try {
            await getRepository(Ticket).update({id: body.ticket_id}, {confirmed_seller_transfer: true})
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})

            const mail = new MailService()

            mail.sendMail(ticket.buyer, EmailTemplates.TransferConfirmation, {
                user: ticket.buyer,
                ticket,
                link: STARTING_LINK + "ticketwallet"
            })
        } catch (error) {
            throw new ApiError('Error while confirming transfer by seller', 401, error.message)
        }
    }

    @Security('bearer')
    @Post('transferred-ticket-buyer-confirmation')
    public async transferredTicketBuyerConfirmation(@Body() body: CheckoutTicket) {
        try {
            await getRepository(Ticket).update({id: body.ticket_id}, {confirmed_seller_transfer: true, status: TicketStatus.CompletedTransfer})
            const ticket = await getConnection().getRepository(Ticket).findOneOrFail({id: body.ticket_id})
            const seller = ticket.seller
            const price = ticket.price

            client_hyperwallet.createPayment({
                amount: price + "",
                currency: "USD",
                destinationToken: seller.seller_payment_id,
                purpose: "OTHER",
                clientPaymentId: ticket.id
            }, (errors, body, res) => {
                console.log(body)
            })
        } catch (error) {
            throw new ApiError('Error while confirming transfer by buyer', 401, error.message)
        }
    }
}
