import React from 'react'
import {PageDashboard} from '../PageUniversal'
import BuySellTab from './BuySellTab'

const DashboardPage: React.FC = () => {
    return (
        <PageDashboard>
            <BuySellTab/>
        </PageDashboard>
    )
}

export default DashboardPage