import styled from 'styled-components'
import {Layout} from 'antd'
import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import BackgroundPolygons from '../../components/BackgroundPolygons'
import Page from '../../components/Page'
import {Card} from 'antd'
import Footer from './Footer'
import media from 'styled-media-query'

export const FULL_SCREEN_WITH_BAR = {minHeight:"100vh", marginTop: -90, paddingTop: 90}
export const FULL_SCREEN = {minHeight:"100vh"}

export const LayoutNoBG = styled(Layout)<{ hasTable: boolean }>`
    background: rgba(0,0,0,0);

    ${media.lessThan("small")`
        width: ${(props: any) => props.hasTable ? 'fit-content' : 'auto'};
    `}
`

interface PageDashboardProps {
    children: ReactNode
    isLoggedIn?: boolean
    selected?: number
    cardStyle?: React.CSSProperties,
    pageStyle?: React.CSSProperties
    hasTable?: boolean
}

export const PageDashboard: React.FC<PageDashboardProps> = (props) => {
    return (
        <LayoutNoBG hasTable={props.hasTable !== undefined ? props.hasTable : false}>
            <Navbar isLoggedIn={props.isLoggedIn === undefined ? true : props.isLoggedIn} isDashboard={true} selected={props.selected !== undefined ? props.selected : 0}/>
            <BackgroundPolygons/>
            <Page style={{ ...FULL_SCREEN_WITH_BAR, ...props.pageStyle, backgroundColor: '#FFCB05', paddingLeft: 0, paddingRight: 0}}>
                <Card style={{...props.cardStyle, marginBottom: 50}}>
                    {props.children}
                </Card>
            </Page>
            <Footer/>
        </LayoutNoBG>
    )
}