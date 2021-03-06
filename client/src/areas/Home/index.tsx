import React, { useEffect, ReactNode, CSSProperties } from 'react';
import { Layout, Row, Col, Divider } from 'antd';
import Navbar from '../Universal/Navbar'
import styled from 'styled-components'
import Greetings from './Sections/Greetings'
import BackgroundPolygons from '../../components/BackgroundPolygons';
import HowItWorks from './Sections/HowItWorks'
import WhyUs from './Sections/WhyUs'
import Footer from '../Universal/Footer'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN, FULL_SCREEN_WITH_BAR} from '../Universal/PageUniversal'

const MainPage: React.FC = () => {
    return (
        <LayoutNoBG hasTable={false}>
            <Navbar selected={0} isLoggedIn={false}/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Greetings 
                    isDashboard={false}
                    title={"The Sports Ticket Marketplace of the Future"}
                    subtitle={"We make it both easier and safer to buy and sell Football tickets!"}
                    />
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
