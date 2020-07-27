import React, {useEffect, useContext, useState} from 'react'
import {PageDashboard} from '../Universal/PageUniversal'
import SellSection from '../Sections/Sell'
import {UserContext} from '../../lib/UserContext'
import {Ticket, PostTicketBody} from '../../../api'

const SellingPage: React.FC = () => {
    const {api, currentUser} = useContext(UserContext)
    const [ticketWallet, setTicketWallet] = useState<Ticket[]>([])

    useEffect(() => {
        if (currentUser !== null) {
            getTicketWallet()
        }
    }, [])

    const getTicketWallet = async () => {
        const body = await api.getTicketWallet()
        setTicketWallet(body.data)
    }

    const postTicket = async (ticketBody: PostTicketBody) => {
        await api.postTicket(ticketBody)
        await getTicketWallet()
    }

    const removeTicket = async (ticketId: string) => {
        await api.removeTicket({id: ticketId})
        await getTicketWallet()
    }
    return (
        <PageDashboard isLoggedIn={currentUser === null ? false : true} selected={-1}>
            <SellSection tickets={ticketWallet} postTicket={postTicket} removeTicket={removeTicket}/>
        </PageDashboard>
    )
}

export default SellingPage