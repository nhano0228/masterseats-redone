import React from 'react'
import {Container} from '../DashboardPage/DashboardPage.styled'
import OpenPage from '../Universal/OpenPage'
import SellingForm from './SellingForm'
import {PostTicketBody} from '../../../api'
import {message} from 'antd'
import { CardContainer } from '../Universal/Card.styled'
import MasterSeatsCard from '../../components/MasterSeatsCard'

const SellingFormComponent: React.FC = () => {
    const postTicket = (ticketBody: PostTicketBody) => {
        localStorage.setItem('game', ticketBody.game)
        localStorage.setItem('price', ticketBody.price + "")
        localStorage.setItem('section', ticketBody.section + "")

        OpenPage('/register')
        message.info("Please register/login to add your ticket to our platform.")
    }

    return (
        <Container>
            <CardContainer>
                <MasterSeatsCard style={{maxWidth: 450}} withLink={true}>
                    <SellingForm postTicket={postTicket}/>
                </MasterSeatsCard>
            </CardContainer>
        </Container>
    )
}

export default SellingFormComponent