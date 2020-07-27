import React, { useState, useEffect, useContext } from 'react'
import { Select, Button, Table, Typography, Grid, message } from 'antd';
import styled from 'styled-components'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions, Ticket, TicketStatus, SortTicketsBody} from '../../../api'
import {ScreenSize} from '../../lib'
import {
    GenButton, 
    Container, 
    FilterContainer, 
    SelectContainer, 
    returnEmojiString, 
    GenIconButton,
    DollarAdjustedOutline,
    PurchaseContainer
    } from '../DashboardPage/DashboardPage.styled'
import {SearchOutlined} from '@ant-design/icons'
import {GameSelect, FilterSelect} from '../../components/SelectOptions'
import {UserContext} from '../../lib/UserContext'
import OpenPage from '../Universal/OpenPage'
import StripeCardModal from '../SellingPage/StripeCardModal'

const {useBreakpoint} = Grid

interface BuyProps {
    tickets: Ticket[]
    getTickets: (sortTicketBody?: SortTicketsBody) => void
}

const Buy: React.FC<BuyProps> = props => {
    const {currentUser, api}  = useContext(UserContext)
    const {tickets, getTickets} = props
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [filterValue, setFilterValue] = useState<FilterOptions>(undefined)
    const [visible, setVisibility] = useState(false)
    const [payment_secret, setPaymentSecret] = useState('')
    const [ticket_id, setTicketId] = useState('')
    
    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    
    useEffect(() => {
        Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => {
            if (screen[0] !== ScreenSize[screenSize]) {
                setScreenSize(ScreenSize[screen[0]])
            }
        })
    }, [screens])

    const clickPurchase = async (ticket_id: string) => {
        if (currentUser === null) {
            message.info("Please create an account to start purchasing tickets.")
            OpenPage('/login')
            return
        }
        if (!currentUser.is_email_verified) {
            message.error("Please verify your email before trying to purchase a ticket.")
            return
        }

        const paymentIntent = await api.checkoutTicket({ticket_id})
        setVisibility(true)
        setPaymentSecret(paymentIntent.data)
        setTicketId(ticket_id)
    }

    return (
        <Container>
            <StripeCardModal 
                visible={visible}
                payment_intent={payment_secret}
                onCancel={() => {
                    setVisibility(false)
                    setPaymentSecret('')
                    setTicketId('')
                }}
                onComplete={async () => {
                    await api.orderConfirmation({ticket_id})
                    setVisibility(false)
                    setPaymentSecret('')
                    setTicketId('')
                }}
            />
            <FilterContainer>
                <SelectContainer>
                    <GameSelect hasAllGames={true} value={gameValue} setValue={(e) => setGameValue(e)}/>
                    <FilterSelect value={filterValue} setValue={(e) => setFilterValue(e)} />
                </SelectContainer>
                <GenButton onClick={async () => await getTickets({filter: filterValue, game: gameValue})} icon={<SearchOutlined />}>
                    {screenSize >= 1 ? "Search" : null}
                </GenButton>
            </FilterContainer>
            <Table columns={[
                    {
                        title: 'Game',
                        key: 'game',
                        dataIndex: 'game',
                        render: (text, data) => returnEmojiString(data.game)
                    },
                    {
                        title: 'Section',
                        key: 'section',
                        dataIndex: 'section'
                    },
                    {
                        title: 'Price ($)',
                        key: 'price',
                        dataIndex: 'price'
                    },
                    {
                        title: '',
                        key: 'buy',
                        dataIndex: 'ticketId',
                        render: (text, data) => (
                            <PurchaseContainer>
                                <GenIconButton icon={<DollarAdjustedOutline/>} onClick={async () => await clickPurchase(data.id)}>
                                    {screenSize !== 0 ? "Purchase" : null}
                                </GenIconButton>
                            </PurchaseContainer>
                        )
                    }
                    ]} dataSource={tickets} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Buy