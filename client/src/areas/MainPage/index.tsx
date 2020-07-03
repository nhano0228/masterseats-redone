import React, { useEffect, ReactNode } from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Greetings from './Sections/Greetings'
import BackgroundPolygons from '../../components/BackgroundPolygons';
import PageDivider from '../../components/PageDivider'
import HowItWorks from './Sections/HowItWorks'

const LayoutStyled = styled(Layout)`
    background: rgba(0,0,0,0);
`

const FULL_SCREEN_WITH_BAR = {height:"100vh", marginTop: -90, paddingTop: 90}
const FULL_SCREEN = {height:"100vh"}

interface PageProps {
    style: Object
    children?: ReactNode
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <Row style={props.style}>
                <Col span={4}/>
                <Col style={props.style} span={16}>
                    {props.children}
                </Col>
                <Col span={4}/>
        </Row>
    )
}

const MainPage: React.FC = () => {
    return (
        <LayoutStyled>
            <Navbar/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Greetings/>
            </Page>
            <Page style={FULL_SCREEN}>
                <HowItWorks/>
            </Page>

        </LayoutStyled>
    )
};

export default MainPage
