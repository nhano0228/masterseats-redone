import React, {useEffect, useContext, useState} from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'
import SellSection from '../Sections/Sell'
import BuySection from '../Sections/Buy'
import ProfileSection from '../Sections/Profile'
import {Ticket, SortTicketsBody, PostTicketBody} from '../../../api'
import {UserContext} from '../../lib/UserContext'

const { TabPane } = Tabs;

const BuySellTab: React.FC = () => {
    const {api} = useContext(UserContext)
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [ticketWallet, setTicketWallet] = useState<Ticket[]>([])

    const getTickets = async (sortTicketBody) => {
        var sortFields = sortTicketBody
        if (sortTicketBody.game === "All Games") {
            sortFields = {filter: sortTicketBody.filter}
        }

        const body = await api.sortTickets(sortFields)
        console.log(body.data)
        setTickets(body.data)
    }
    const getTicketWallet = async () => {
        const body = await api.getTicketWallet()
        setTicketWallet(body.data)
    }

    useEffect(() => {
        getTickets({game: "All Games", filter: "Price - lowest to highest"})
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
        <Tabs style={{
            borderBottom: 0,
            fontFamily: 'Mark Pro Bold',
            textAlign: 'center'
        }} defaultActiveKey="1" centered={true} size="large">
            <TabPane tab="Buy" key="1">
                <BuySection tickets={tickets} getTickets={getTickets}/>
            </TabPane>
            <TabPane tab="Sell" key="2">
                <SellSection tickets={ticketWallet} postTicket={postTicket} removeTicket={removeTicket}/>
            </TabPane>
            <TabPane tab="Profile" key="3">
                <ProfileSection />
            </TabPane>
        </Tabs>
    )
}

export default BuySellTab