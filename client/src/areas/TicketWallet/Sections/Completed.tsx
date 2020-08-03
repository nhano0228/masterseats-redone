import React, {useState, useEffect, useContext} from 'react'
import {Table, Modal, Grid, message} from 'antd'
import {Container, CloseAdjustedOutline, returnEmojiString, GenIconButton, GenButton, AddTicketContainer, PlusCircleAdjustedOutline} from '../../DashboardPage/DashboardPage.styled'
import {MichiganFootballGame, Ticket, TicketStatus, PostTicketBody} from '../../../../api'
import {ScreenSize} from '../../../lib'
import AddTicketModal from '../AddTicketModal'
import {UserContext} from '../../../lib/UserContext'
import OpenPage from '../../Universal/OpenPage'

const {useBreakpoint} = Grid

interface CompletedProps {
    tickets: Ticket[]
}

const Completed: React.FC<CompletedProps> = props => {
    const {tickets} = props

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
                }
            ]} dataSource={tickets} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Completed