import React, { useEffect, ReactNode, CSSProperties } from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Greetings from './Sections/Greetings'
import BackgroundPolygons from '../../components/BackgroundPolygons';
import HowItWorks from './Sections/HowItWorks'
import WhyUs from './Sections/WhyUs'
import Footer from './Footer'

const LayoutStyled = styled(Layout)`
    background: rgba(0,0,0,0);
`

const FULL_SCREEN_WITH_BAR = {minHeight:"100vh", marginTop: -90, paddingTop: 90}
const FULL_SCREEN = {minHeight:"100vh"}

interface PageProps {
    style: CSSProperties
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
            <Navbar selected={0}/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Greetings/>
            </Page>
            <Page style={FULL_SCREEN}>
                <HowItWorks/>
            </Page>
            <Page style={{...FULL_SCREEN, backgroundColor: '#00274c'}}>
                <WhyUs/>
            </Page>
            <Footer/>
        </LayoutStyled>
    )
};

export default MainPage
