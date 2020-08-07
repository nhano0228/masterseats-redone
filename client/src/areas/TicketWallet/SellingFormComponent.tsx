import React from 'react'
import {Container} from '../DashboardPage/DashboardPage.styled'
import OpenPage from '../Universal/OpenPage'
import SellingForm from './SellingForm'
import {PostTicketBody} from '../../../api'
import {message} from 'antd'
import { CardContainer } from '../Universal/Card.styled'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import {FULL_SCREEN_WITH_BAR} from '../Universal/PageUniversal'
import Page from '../../components/Page'
import Navbar from '../Universal/Navbar'
import Footer from '../Universal/Footer'
import styled from 'styled-components'

const OuterContainer = styled.div`
    width: 100%;
`

const SellingFormComponent: React.FC = () => {
    const postTicket = (ticketBody: PostTicketBody) => {
        console.log(ticketBody.game)
        localStorage.setItem('game', ticketBody.game)
        localStorage.setItem('price', ticketBody.price + "")
        localStorage.setItem('section', ticketBody.section + "")

        OpenPage('/register?fromselling')
        message.info("Please register/login to add your ticket to our platform.")
    }

    return (
        <OuterContainer>
            <Navbar isDashboard={false} isLoggedIn={false} selected={-1}/>
            <Container style={{paddingBottom: 0}}>
                <Page style={FULL_SCREEN_WITH_BAR}>
                    <CardContainer>
                        <MasterSeatsCard style={{maxWidth: 450}} withLink={true}>
                            <SellingForm postTicket={postTicket} showVenmo={false}/>
                        </MasterSeatsCard>
                    </CardContainer>
                </Page>
            </Container>
            <Footer/>
        </OuterContainer>
    )
}

export default SellingFormComponent