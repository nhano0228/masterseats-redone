import React, {useState, useEffect, useContext} from 'react'
import {Table, Modal, Grid, message} from 'antd'
import {Container, CloseAdjustedOutline, returnEmojiString, GenIconButton, GenButton, AddTicketContainer, PlusCircleAdjustedOutline} from '../../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, Ticket, TicketStatus, PostTicketBody} from '../../../../api'
import {ScreenSize} from '../../../lib'
import AddTicketModal from '../AddTicketModal'
import {UserContext} from '../../../lib/UserContext'
import OpenPage from '../../Universal/OpenPage'
import AreYouSureModal from '../../Universal/AreYouSureModal'

const {useBreakpoint} = Grid

interface SellProps {
    tickets: Ticket[]
    postTicket: (ticketBody: PostTicketBody) => void
    removeTicket: (ticketId: string) => void
    visible: boolean
    setVisibility: (visible: boolean) => void
}

const Sell: React.FC<SellProps> = props => {
    const {tickets, postTicket, removeTicket, visible, setVisibility} = props

    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    const [removeTicketVisible, setRemoveTicketVisible] = useState(false)
    const [removeTicketId, setRemoveTicketId] = useState('')
    
    useEffect(() => {
        Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => {
            if (screen[0] !== ScreenSize[screenSize]) {
                setScreenSize(ScreenSize[screen[0]])
            }
        })
    }, [screens])


    const clickAddTicket = () => {
        setVisibility(true)
    }

    return (
        <Container>
            <AddTicketModal postTicket={postTicket}
                            visible={visible} 
                            onCancel={() => setVisibility(false)}/>
            <AreYouSureModal title={"Are you sure you want to remove the ticket?"}
                            visible={removeTicketVisible}
                            onCancel={() => setRemoveTicketVisible(false)}
                            onComplete={async () => {
                                await removeTicket(removeTicketId)
                                setRemoveTicketVisible(false)
                            }}
                />
            <AddTicketContainer>
                <GenButton onClick={clickAddTicket} icon={<PlusCircleAdjustedOutline />}>
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
                            <GenIconButton icon={<CloseAdjustedOutline />} onClick={() => {
                                setRemoveTicketId(data.id)
                                setRemoveTicketVisible(true)
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