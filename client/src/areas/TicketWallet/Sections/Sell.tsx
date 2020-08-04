import React, {useState, useEffect, useContext} from 'react'
import {Table, Modal, Grid, message, Typography} from 'antd'
import {Container, CloseAdjustedOutline, returnEmojiString, GenIconButton, GenButton, AddTicketContainer, PlusCircleAdjustedOutline, ExclamationCircleAdjustedOutlined} from '../../DashboardPage/DashboardPage.styled'
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
    confirmTransferSeller: (ticket_id: string) => void,
    confirmTransferBuyer: (ticket_id: string) => void
    refundTicket: (ticket_id: string) => void
}

const Sell: React.FC<SellProps> = props => {
    const {tickets, postTicket, removeTicket, visible, setVisibility, confirmTransferSeller, confirmTransferBuyer, refundTicket} = props

    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    const [removeTicketVisible, setRemoveTicketVisible] = useState(false)
    const [action, setAction] = useState("")
    const [id, setId] = useState("")
    
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
            <AreYouSureModal title={"Are you sure you want to do that?"}
                            visible={removeTicketVisible}
                            onCancel={() => setRemoveTicketVisible(false)}
                            onComplete={async () => {
                                setRemoveTicketVisible(false)
                                if (action === "confirmTransferSeller") {
                                    await confirmTransferSeller(id)
                                } else if (action === "removeTicket") {
                                    await removeTicket(id)
                                }
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
                    dataIndex: 'price',
                    render: (text) => parseFloat(text).toFixed(2)
                },
                {
                    title: 'Status',
                    key: 'status',
                    dataIndex: 'status'
                },
                {
                    title: '',
                    key: 'options',
                    dataIndex: 'status',
                    render: (text, data) => {
                        if (data.status === TicketStatus.CompletedTransfer) {
                            return (<div/>)
                        } else if (data.status === TicketStatus.PendingTransfer) {
                            if (!data.confirmed_buyer_transfer && data.confirmed_seller_transfer) {
                                return (
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <Typography.Text>Buyer Must Confirm Transfer</Typography.Text>
                                    </div>
                                )
                            } else {
                                return (
                                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <GenIconButton disabled={data.confirmed_seller_transfer} icon={<ExclamationCircleAdjustedOutlined />} onClick={() => {
                                            setRemoveTicketVisible(true)
                                            setId(data.id)
                                            setAction("confirmTransferSeller")
                                        }}>
                                            {screenSize > 0 ? "Confirm Transfer" : null}
                                        </GenIconButton>
                                    </div>
                                )
                            }
                        } else if (data.status === TicketStatus.Open) {
                            return (
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <GenIconButton icon={<CloseAdjustedOutline />} onClick={() => {
                                        setRemoveTicketVisible(true)
                                        setId(data.id)
                                        setAction("removeTicket")
                                    }}>
                                        {screenSize > 0 ? "Remove" : null}
                                    </GenIconButton>
                            </div>)
                        }
                    }
                }
            ]} dataSource={tickets} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Sell