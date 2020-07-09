import styled from 'styled-components'
import {Layout} from 'antd'
import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import BackgroundPolygons from '../components/BackgroundPolygons'
import Page from '../components/Page'
import {Card} from 'antd'
import Footer from './Footer'

export const FULL_SCREEN_WITH_BAR = {minHeight:"100vh", marginTop: -90, paddingTop: 90}
export const FULL_SCREEN = {minHeight:"100vh"}

export const LayoutNoBG = styled(Layout)`
    background: rgba(0,0,0,0);
`

interface PageDashboardProps {
    children: ReactNode
    isLoggedIn?: boolean
}

export const PageDashboard: React.FC<PageDashboardProps> = (props) => {
    return (
        <LayoutNoBG>
            <Navbar isLoggedIn={props.isLoggedIn === undefined ? true : props.isLoggedIn} isDashboard={true} selected={0}/>
            <BackgroundPolygons/>
            <Page style={{...FULL_SCREEN_WITH_BAR, backgroundColor: '#FFCB05', paddingLeft: 0, paddingRight: 0}}>
                <Card style={{marginBottom: 50}}>
                    {props.children}
                </Card>
            </Page>
            <Footer/>
        </LayoutNoBG>
    )
}