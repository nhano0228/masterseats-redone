import React, {useState, useEffect, useContext} from 'react'
import {Table, Modal, Grid, message, Typography} from 'antd'
import {Container, 
        returnEmojiString, 
        GenIconButton, 
        CloseAdjustedOutline,
        ExclamationCircleAdjustedOutlined} from '../../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, Ticket, TicketStatus, PostTicketBody} from '../../../../api'
import {ScreenSize} from '../../../lib'
import { Tabs } from 'antd';
import AreYouSureModal from '../../Universal/AreYouSureModal'

const { TabPane } = Tabs;

const {useBreakpoint} = Grid

interface PendingProps {
    pendingSold: Ticket[],
    pendingBuy: Ticket[],
    confirmTransferSeller: (ticket_id: string) => void,
    confirmTransferBuyer: (ticket_id: string) => void
    refundTicket: (ticket_id: string) => void
}

const Pending: React.FC<PendingProps> = props => {
    const {pendingSold, pendingBuy, confirmTransferSeller, confirmTransferBuyer, refundTicket} = props

    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    const [visible, setVisibility] = useState(false)
    const [action, setAction] = useState("")
    const [id, setId] = useState("")

    const columns = (isBuyer: boolean) => {
        if (isBuyer) {
            return [
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
                    key: 'confirm',
                    dataIndex: 'id',
                    render: (text, data) => {
                        if (data.confirmed_seller_transfer) {
                            return (<div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <GenIconButton disabled={data.confirmed_buyer_transfer} icon={<ExclamationCircleAdjustedOutlined />} onClick={() => {
                                    setVisibility(true)
                                    setId(data.id)
                                    setAction("confirmTransferBuyer")
                                }}>
                                    {screenSize > 0 ? "Confirm Transfer" : null}
                                </GenIconButton>
                            </div>)
                        } else {
                            return (
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Typography.Text>Seller Must Confirm Transfer</Typography.Text>
                                </div>
                            )
                        }
                    }
                },
                {
                    title: '',
                    key: 'refund',
                    dataIndex: 'id',
                    render: (text, data) => {
                        return (<div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <GenIconButton icon={<CloseAdjustedOutline />} onClick={() => {
                                setVisibility(true)
                                setId(data.id)
                                setAction("refundTicket")
                            }}>
                                {screenSize > 0 ? "Get Refund" : null}
                            </GenIconButton>
                        </div>)
                    }
                }
            ]
        } else {
            return [
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
                    key: 'confirm',
                    dataIndex: 'id',
                    render: (text, data) => {
                        if (!data.confirmed_buyer_transfer && data.confirmed_seller_transfer) {
                            return (
                                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Typography.Text>Buyer Must Confirm Transfer</Typography.Text>
                                </div>
                            )
                        } else {
                            return (<div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <GenIconButton disabled={data.confirmed_seller_transfer} icon={<ExclamationCircleAdjustedOutlined />} onClick={() => {
                                    setVisibility(true)
                                    setId(data.id)
                                    setAction("confirmTransferSeller")
                                }}>
                                    {screenSize > 0 ? "Confirm Transfer" : null}
                                </GenIconButton>
                            </div>)
                        }
                    }
                }/*,
                {
                    title: '',
                    key: 'cancel',
                    dataIndex: 'id',
                    render: (text, data) => {
                        var disabled: boolean
                        if (isBuyer) {
                            disabled = !data.confirmed_seller_transfer
                        } else {
                            disabled = !data.confirmed_buyer_transfer
                        }

                        return (<div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <GenIconButton icon={<CloseAdjustedOutline />} onClick={() => {
                                setVisibility(true)
                                setId(data.id)
                                setAction("refundTicket")
                            }}>
                                {screenSize > 0 ? "Cancel Transfer" : null}
                            </GenIconButton>
                        </div>)
                    }
                }*/
            ]
        }
    }
    
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
        <>
            <AreYouSureModal title={"Are you sure you want to remove the ticket?"}
                            visible={visible}
                            onCancel={() => setVisibility(false)}
                            onComplete={async () => {
                                setVisibility(false)
                                if (action === "refundTicket") {
                                    await refundTicket(id)
                                } else if (action === "confirmTransferBuyer") {
                                    await confirmTransferBuyer(id)
                                } else if (action === "confirmTransferSeller") {
                                    await confirmTransferSeller(id)
                                }
                            }}
                />
            <Tabs style={{
                borderBottom: 0,
                fontFamily: 'Mark Pro',
                fontSize: 14, 
                textAlign: 'center'
            }} defaultActiveKey={"1"} centered={true} size="large">
                <TabPane tab="Sold" key="1">
                    <Container>
                        <Table columns={columns(false)} dataSource={pendingSold} pagination={{ position: ['bottomCenter'] }} />
                    </Container>
                </TabPane>
                <TabPane tab="Bought" key="2">
                    <Container>
                        <Table columns={columns(true)} dataSource={pendingBuy} pagination={{ position: ['bottomCenter'] }} />
                    </Container>
                </TabPane>
            </Tabs>
        </>
    )
}

export default Pending