import React, {useEffect, useContext, useState} from 'react'
import styled from 'styled-components'
import {PageDashboard} from '../Universal/PageUniversal'
import ConglomerateTable from './ConglomerateTable'
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
    const [wallet, setWallet] = useState<Ticket[]>([])

    useEffect(() => {
        if (currentUser !== null) {
            getTicketWallet()
        }
    }, [])

    const getTicketWallet = async () => {
        const body = await api.getTicketWallet()
        setWallet(body.data.reverse())
    }

    const postTicket = async (ticketBody: PostTicketBody) => {
        var ticket: PostTicketBody 
        
        if (ticketBody.venmo_phone === undefined) {
            ticket = {
                game: ticketBody.game,
                section: ticketBody.section,
                price: ticketBody.price,
            }
        } else {
            const phone = ticketBody.venmo_phone
            const phone_replaced = phone.replace(/-/g,"")
            ticket = {
                game: ticketBody.game,
                section: ticketBody.section,
                price: ticketBody.price,
                venmo_phone: phone_replaced
            }
        }
        
        await api.postTicket(ticket)
        resetSellingForm()
        await getTicketWallet()
        console.log(serialize({'post': ticketBody.game}))
        OpenPage('/thankyou?' + serialize({'post': ticketBody.game}))
    }

    const removeTicket = async (ticketId: string) => {
        await api.removeTicket({id: ticketId})
        await getTicketWallet()
    }

    const confirmTransferSeller = async (ticket_id: string) => {
        await api.transferredTicketSellerConfirmation({ticket_id})
        await getTicketWallet()
    }

    const confirmTransferBuyer = async (ticket_id: string) => {
        await api.transferredTicketBuyerConfirmation({ticket_id})
        await getTicketWallet()
    }

    const refundTicket = async (ticket_id: string) => {
        await api.refundTicket({id: ticket_id})
        await getTicketWallet()
    }

    return (
        <PageDashboard isLoggedIn={currentUser === null ? false : true} selected={-1}>
            <ConglomerateTable 
                    visible={openModal}
                    setVisibility={setOpenModal}
                    tickets={wallet} 
                    postTicket={postTicket} 
                    removeTicket={removeTicket}
                    confirmTransferSeller={confirmTransferSeller}
                    confirmTransferBuyer={confirmTransferBuyer}
                    refundTicket={refundTicket}/>
        </PageDashboard>
    )
}

export default TicketWallet