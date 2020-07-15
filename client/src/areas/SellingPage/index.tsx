import React, {useEffect, useContext, useState} from 'react'
import {PageDashboard} from '../PageUniversal'
import SellSection from '../Sections/Sell'
import {UserContext} from '../../lib/UserContext'
import {Ticket, PostTicketBody} from '../../../api'

const SellingPage: React.FC = () => {
    const {api} = useContext(UserContext)
    const [ticketWallet, setTicketWallet] = useState<Ticket[]>([])

    const getTicketWallet = async () => {
        const body = await api.getTicketWallet()
        setTicketWallet(body.data)
    }

    useEffect(() => {
        getTicketWallet()
    }, [])

    const postTicket = async (ticketBody: PostTicketBody) => {
        await api.postTicket(ticketBody)
        await getTicketWallet()
    }

    const removeTicket = async (ticketId: string) => {
        await api.removeTicket({id: ticketId})
        await getTicketWallet()
    }
    return (
        <PageDashboard isLoggedIn={false}>
            <SellSection tickets={ticketWallet} postTicket={postTicket} removeTicket={removeTicket}/>
        </PageDashboard>
    )
}

export default SellingPage