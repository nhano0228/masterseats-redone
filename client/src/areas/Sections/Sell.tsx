import React, {useState, useEffect} from 'react'
import {Table, Modal, Grid} from 'antd'
import {Container, CloseAdjustedOutline, returnEmojiString, GenIconButton, GenButton, AddTicketContainer, PlusCircleAdjustedOutline} from '../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, FilterOptions, Ticket, ScreenSize, TicketStatus} from 'masterseats-model'
import AddTicketModal from '../DashboardPage/AddTicketModal'
import media from "styled-media-query";
const {useBreakpoint} = Grid
  
const DATA: Ticket[] = [
    {
        game: MichiganFootballGame.Ball,
        price: 25,
        id: '12345',
        section: 24,
        user_id: '1',
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    {
        game: MichiganFootballGame.Wisconsin,
        price: 25,
        id: '1234578',
        section: 26,
        user_id: '1',
        status: TicketStatus.Open,
        confirmed_seller_transfer: false,
        confirmed_buyer_transfer: false,
    },
    
];

const Sell: React.FC = () => {
    const [visible, setVisibility] = useState(false)

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
            <AddTicketModal visible={visible} 
                            onCancel={() => setVisibility(false)}/>
            <AddTicketContainer>
                <GenButton onClick={() => setVisibility(true)} icon={<PlusCircleAdjustedOutline />}>
                    {screenSize >= 1 ? "Add Ticket" : null}
                </GenButton>
            </AddTicketContainer>
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
                    key: 'remove',
                    dataIndex: 'ticketId',
                    render: (text, data) => (
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <GenIconButton icon={<CloseAdjustedOutline />} onClick={() => {}}>
                                {screenSize > 0 ? "Remove" : null}
                            </GenIconButton>
                        </div>
                    )
                }
            ]} dataSource={DATA} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Sell