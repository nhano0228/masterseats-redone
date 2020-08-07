import React, {useEffect, useContext, useState} from 'react'
import styled from 'styled-components'
import {PageDashboard} from '../Universal/PageUniversal'
import {UserContext} from '../../lib/UserContext'
import OpenPage from '../Universal/OpenPage'
import { serialize, resetSellingForm } from '../../lib'
import {Table, Modal, Grid, message, Typography} from 'antd'
import {Container, 
        returnEmojiString, 
        GenIconButton, 
        CloseAdjustedOutline,
        ExclamationCircleAdjustedOutlined} from '../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, Ticket, TicketStatus, PostTicketBody} from '../../../api'
import {ScreenSize} from '../../lib'
import AreYouSureModal from '../Universal/AreYouSureModal'
const {useBreakpoint} = Grid

interface OrdersPageProps {
    getOrders: () => void
    orders: Ticket[]
    confirmTransferBuyer: (id: string) => void
    refundTicket: (id: string) => void
}

const OrdersPage: React.FC<OrdersPageProps> = props => {
    const {getOrders, orders, confirmTransferBuyer, refundTicket} = props

    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    const {api, currentUser} = useContext(UserContext)
    const [visible, setVisibility] = useState(false)
    const [action, setAction] = useState("")
    const [id, setId] = useState("")

    useEffect(() => {
        if (currentUser !== null) {
            getOrders()
        }
    }, [])

    useEffect(() => {
        Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => {
            if (screen[0] !== ScreenSize[screenSize]) {
                setScreenSize(ScreenSize[screen[0]])
            }
        })
    }, [screens])

    const columns = [
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
            title: '',
            key: 'status',
            dataIndex: 'id',
            render: (text, data) => {
                if (data.confirmed_buyer_transfer) {
                    return (
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Typography.Text>Completed Transfer</Typography.Text>
                        </div>
                    ) 
                }
                if (data.confirmed_seller_transfer) {
                    return (<></>)
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
            key: 'action',
            dataIndex: 'id',
            render: (text, data) => {
                if (data.confirmed_buyer_transfer) {
                    return (<></>)
                }
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
        }
    ]

    return (
        <PageDashboard isLoggedIn={currentUser === null ? false : true} selected={-1} hasTable={true}>
            <AreYouSureModal title={"Are you sure you want to perform that action?"}
                    visible={visible}
                    onCancel={() => setVisibility(false)}
                    onComplete={async () => {
                        setVisibility(false)
                        if (action === "refundTicket") {
                            await refundTicket(id)
                        } else if (action === "confirmTransferBuyer") {
                            await confirmTransferBuyer(id)
                        }
                    }}
                />
            <Container>
                <Table columns={columns} dataSource={orders} pagination={{ position: ['bottomCenter'] }} />
            </Container>
        </PageDashboard>
    )
}

export default OrdersPage