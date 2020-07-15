import React, {useState, useEffect} from 'react'
import {Table, Modal, Grid} from 'antd'
import {Container, CloseAdjustedOutline, returnEmojiString, GenIconButton, GenButton, AddTicketContainer, PlusCircleAdjustedOutline} from '../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, Ticket, TicketStatus, PostTicketBody} from '../../../api'
import {ScreenSize} from '../../lib'
import AddTicketModal from '../DashboardPage/AddTicketModal'

const {useBreakpoint} = Grid

interface SellProps {
    tickets: Ticket[]
    postTicket: (ticketBody: PostTicketBody) => void
    removeTicket: (ticketId: string) => void
}

const Sell: React.FC<SellProps> = props => {
    const {tickets, postTicket, removeTicket} = props
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
            <AddTicketModal postTicket={postTicket}
                            visible={visible} 
                            onCancel={() => setVisibility(false)}/>
            <AddTicketContainer>
                <GenButton onClick={() => {setVisibility(true)}} icon={<PlusCircleAdjustedOutline />}>
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
                    dataIndex: 'id',
                    render: (text, data) => (
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <GenIconButton icon={<CloseAdjustedOutline />} onClick={async () => {
                                await removeTicket(data.id)
                            }}>
                                {screenSize > 0 ? "Remove" : null}
                            </GenIconButton>
                        </div>
                    )
                }
            ]} dataSource={tickets} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Sell