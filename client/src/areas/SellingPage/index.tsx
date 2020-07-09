import React from 'react'
import {PageDashboard} from '../PageUniversal'
import SellSection from '../Sections/Sell'

const SellingPage: React.FC = () => {
    return (
        <PageDashboard isLoggedIn={false}>
            <SellSection/>
        </PageDashboard>
    )
}

export default SellingPage