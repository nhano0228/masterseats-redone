import React from 'react'
import {Card} from 'antd'
import Navbar from '../Navbar'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN_WITH_BAR} from '../PageUniversal'
import Footer from '../Footer'
import BackgroundPolygons from '../../components/BackgroundPolygons'
import BuySellTab from './BuySellTab'

const DashboardPage: React.FC = () => {
    return (
        <LayoutNoBG>
            <Navbar isDashboard={true} selected={0}/>
            <BackgroundPolygons/>
            <Page style={{...FULL_SCREEN_WITH_BAR, backgroundColor: '#FFCB05', paddingLeft: 0, paddingRight: 0}}>
                <Card style={{marginBottom: 50}}>
                    <BuySellTab/>
                </Card>
            </Page>
            <Footer/>
        </LayoutNoBG>
    )
}

export default DashboardPage