import React, { useEffect, ReactNode, CSSProperties } from 'react';
import { Card, Typography, Button } from 'antd';
import {CheckCircleOutlined} from '@ant-design/icons'
import Navbar from '../Universal/Navbar'
import styled from 'styled-components'
import BackgroundPolygons from '../../components/BackgroundPolygons';
import Footer from '../Universal/Footer'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN, FULL_SCREEN_WITH_BAR} from '../Universal/PageUniversal'
import OpenPage from '../Universal/OpenPage'
import media from 'styled-media-query'
import {GenButton} from '../DashboardPage/DashboardPage.styled'

const TitleStyled = styled(Typography.Text)`
    text-align: center;
    font-family: 'Mark Pro Bold';
    margin-bottom: 30px !important;
    margin-top: 70px !important;
    font-size: 26px;
    ${media.lessThan("medium")`
        font-size: 24px !important;
    `}
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px;
`

const Check = styled(CheckCircleOutlined)`
    font-size: 120px;
    color: #52C51C;
`

const VerifyEmailComponent: React.FC = () => {
    return (
        <LayoutNoBG>
            <Navbar selected={-1} isLoggedIn={false}/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Card>
                    <CardContainer>
                        <Check />
                        <TitleStyled>Thank you! We know email confirmations suck, but we do it for you to make sure everyone on the platform is a student. Please check your email for a confirmation link.</TitleStyled>
                        <GenButton onClick={() => OpenPage('/')}>Go Home</GenButton>
                    </CardContainer>
                </Card>
            </Page>
            <Footer/>
        </LayoutNoBG>
    )
};

export default VerifyEmailComponent
