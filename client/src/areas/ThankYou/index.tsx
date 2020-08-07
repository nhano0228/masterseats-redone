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
import {useRouter} from 'next/router'

const TitleStyled = styled(Typography.Text)`
    text-align: center;
    font-family: 'Mark Pro Bold';
    margin-bottom: 30px !important;
    margin-top: 70px !important;
    font-size: 26px;
    white-space: pre-line;
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

const ThankYouComponent: React.FC<{message: string, isEmail: boolean}> = props => {
    const {message, isEmail} = props
    var nav = <Navbar selected={-1} isLoggedIn={false}/>
    if (!isEmail) {
        nav = <Navbar isLoggedIn={true} isDashboard={true} selected={-1}/>
    }
    return (
        <LayoutNoBG>
            {nav}
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Card>
                    <CardContainer>
                        <Check />
                        <TitleStyled>{message.split("<br/>").join("\n")}</TitleStyled>
                        {!isEmail ? 
                            <GenButton onClick={() => {
                                OpenPage('/dashboard')
                            }}>Go Home</GenButton>
                        : null}
                        
                    </CardContainer>
                </Card>
            </Page>
            <Footer/>
        </LayoutNoBG>
    )
};

export default ThankYouComponent
