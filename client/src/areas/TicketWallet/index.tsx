import React, {useEffect, useContext, useState} from 'react'
import styled from 'styled-components'
import {PageDashboard} from '../Universal/PageUniversal'
import SellSection from './Sections/Sell'
import PendingSection from './Sections/Pending'
import CompletedSection from './Sections/Completed'
import {UserContext} from '../../lib/UserContext'
import {Ticket, PostTicketBody} from '../../../api'
import { Tabs } from 'antd';
import OpenPage from '../Universal/OpenPage'
import { serialize, resetSellingForm } from '../../lib'

const { TabPane } = Tabs;

interface TicketWalletProps {
    setOpenModal: (visible: boolean) => void,
    openModal: boolean,
    defaultValue: string
}

const TicketWallet: React.FC<TicketWalletProps> = props => {
    const {defaultValue, setOpenModal, openModal} = props
    const {api, currentUser} = useContext(UserContext)
    const [unsoldWallet, setUnsoldWallet] = useState<Ticket[]>([])
    const [pendingWalletSeller, setPendingWalletSeller] = useState<Ticket[]>([])
    const [pendingWalletBuyer, setPendingWalletBuyer] = useState<Ticket[]>([])
    const [completedWallet, setCompletedWallet] = useState<Ticket[]>([])

    useEffect(() => {
        if (currentUser !== null) {
            getUnsoldTickets()
            getPendingTicketsBuyer()
            getCompletedTickets()
            getPendingTicketsSeller()
        }
    }, [])

    const getPendingTicketsBuyer = async () => {
        const body = await api.getPendingTicketsBuyer()
        setPendingWalletBuyer(body.data)
    }

    const getPendingTicketsSeller = async () => {
        const body = await api.getPendingTicketsSeller()
        setPendingWalletSeller(body.data)
    }

    const getCompletedTickets = async () => {
        const body = await api.getCompletedTickets()
        setCompletedWallet(body.data)
    }

    const getUnsoldTickets = async () => {
        const body = await api.getTicketWallet()
        setUnsoldWallet(body.data)
    }

    const postTicket = async (ticketBody: PostTicketBody) => {
        await api.postTicket(ticketBody)
        resetSellingForm()
        await getUnsoldTickets()
        console.log(serialize({'post': ticketBody.game}))
        OpenPage('/thankyou?' + serialize({'post': ticketBody.game}))
    }

    const removeTicket = async (ticketId: string) => {
        await api.removeTicket({id: ticketId})
        await getUnsoldTickets()
    }

    const confirmTransferSeller = async (ticket_id: string) => {
        await api.transferredTicketSellerConfirmation({ticket_id})
        await getPendingTicketsSeller()
        await getCompletedTickets()
    }

    const confirmTransferBuyer = async (ticket_id: string) => {
        await api.transferredTicketBuyerConfirmation({ticket_id})
        await getPendingTicketsBuyer()
        await getCompletedTickets()
    }

    const refundTicket = async (ticket_id: string) => {
        await api.refundTicket({id: ticket_id})
        await getPendingTicketsBuyer()
    }

    return (
        <PageDashboard isLoggedIn={currentUser === null ? false : true} selected={-1}>
            <Tabs style={{
                borderBottom: 0,
                fontFamily: 'Mark Pro Bold',
                textAlign: 'center'
            }} defaultActiveKey={defaultValue} centered={true} size="large">
                <TabPane tab="Not Sold" key="1">
                        <SellSection 
                                    visible={openModal}
                                    setVisibility={setOpenModal}
                                    tickets={unsoldWallet} 
                                    postTicket={postTicket} 
                                    removeTicket={removeTicket}/>
                </TabPane>
                <TabPane tab="Pending" key="2">
                    <PendingSection pendingSold={pendingWalletSeller} 
                                    pendingBuy={pendingWalletBuyer} 
                                    confirmTransferSeller={confirmTransferSeller}
                                    confirmTransferBuyer={confirmTransferBuyer}
                                    refundTicket={refundTicket}  />
                </TabPane>
                <TabPane tab="Completed" key="3">
                    <CompletedSection tickets={completedWallet} />
                </TabPane>
            </Tabs>
        </PageDashboard>
    )
}

export default TicketWallet