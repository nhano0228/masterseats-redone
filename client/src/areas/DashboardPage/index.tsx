import React from 'react'
import Navbar from '../../areas/Universal/Navbar'
import BackgroundPolygons from '../../components/BackgroundPolygons'
import Page from '../../components/Page'
import {LayoutNoBG, FULL_SCREEN, FULL_SCREEN_WITH_BAR} from '../Universal/PageUniversal'
import Greetings from '../Home/Sections/Greetings'

const DashboardPage: React.FC = () => {
    return (
        <LayoutNoBG>
            <Navbar isDashboard={true} isLoggedIn={true} selected={0}/>
            <BackgroundPolygons/>
            <Page style={FULL_SCREEN_WITH_BAR}>
                <Greetings 
                    isDashboard={true}
                    title={"Welcome to MasterSeats!"}
                    subtitle={"Start buying or selling football tickets right now by clicking below!"}
                    />
            </Page>
        </LayoutNoBG>
    )
}

export default DashboardPage