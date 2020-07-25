import React from 'react'
import {PageDashboard} from '../PageUniversal'
import Navbar from '../../areas/Navbar'
import BackgroundPolygons from '../../components/BackgroundPolygons'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN, FULL_SCREEN_WITH_BAR} from '../PageUniversal'
import Greetings from '../MainPage/Sections/Greetings'

const DashboardPage: React.FC = () => {
    return (
        <LayoutNoBG>
            <Navbar isDashboard={true} isLoggedIn={true} selected={0}/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Greetings 
                    title={"Welcome to MasterSeats!"}
                    subtitle={"Start buying or selling football tickets right now by clicking below!"}
                    />
            </Page>
        </LayoutNoBG>
    )
}

export default DashboardPage