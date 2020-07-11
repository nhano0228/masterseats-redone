import React, { useState, useEffect } from 'react'
import { Select, Button, Table, Typography, Grid } from 'antd';
import styled from 'styled-components'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions, Ticket, TicketStatus, User} from '../../../api'
import {ScreenSize} from '../../local_models'
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

const {useBreakpoint} = Grid
  
const DATA: Ticket[] = [
    {
        game: MichiganFootballGame.BallState,
        price: 25,
        id: '12345',
        section: 24,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.ArkansasState,
        price: 25,
        id: '1234567',
        section: 25,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.Wisconsin,
        price: 25,
        id: '1234578',
        section: 26,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.BallState,
        price: 25,
        id: '1234576',
        section: 27,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.PennState,
        price: 25,
        id: '1234554',
        section: 20,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.Wisconsin,
        price: 25,
        id: '1234532',
        section: 19,
        user_id: {
            first_name: 'john',
            last_name: 'smith',
            email: 'john@smith.com',
            password: 'password',
            id: 'string',
            is_email_verified: true,
            ticket_wallet: []
        },
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    
];



const Buy: React.FC = () => {
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [filterValue, setFilterValue] = useState<FilterOptions>(undefined)
    
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

    return (
        <Container>
            <FilterContainer>
                <SelectContainer>
                    <GameSelect value={gameValue} setValue={(e) => setGameValue(e)}/>
                    <FilterSelect value={filterValue} setValue={(e) => setFilterValue(e)} />
                </SelectContainer>
                <GenButton onClick={() => {}} icon={<SearchOutlined />}>
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
                                <GenIconButton icon={<DollarAdjustedOutline/>} onClick={() => {}}>
                                    {screenSize !== 0 ? "Purchase" : null}
                                </GenIconButton>
                            </PurchaseContainer>
                        )
                    }
                    ]} dataSource={DATA} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Buy