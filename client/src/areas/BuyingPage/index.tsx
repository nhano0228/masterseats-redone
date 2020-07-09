import React from 'react'
import {PageDashboard} from '../PageUniversal'
import BuySection from '../Sections/Buy'

const BuyingPage: React.FC = () => {
    return (
        <PageDashboard isLoggedIn={false}>
            <BuySection/>
        </PageDashboard>
    )
}

export default BuyingPage