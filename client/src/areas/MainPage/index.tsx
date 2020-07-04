import React, { useEffect, ReactNode, CSSProperties } from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import Greetings from './Sections/Greetings'
import BackgroundPolygons from '../../components/BackgroundPolygons';
import HowItWorks from './Sections/HowItWorks'
import WhyUs from './Sections/WhyUs'
import Footer from '../Footer'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN, FULL_SCREEN_WITH_BAR} from '../PageUniversal'

const MainPage: React.FC = () => {
    return (
        <LayoutNoBG>
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
        </LayoutNoBG>
    )
};

export default MainPage
