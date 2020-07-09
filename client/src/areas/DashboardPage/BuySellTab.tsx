import React from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'
import SellSection from '../Sections/Sell'
import BuySection from '../Sections/Buy'
import ProfileSection from '../Sections/Profile'

const { TabPane } = Tabs;

const BuySellTab: React.FC = () => {
    return (
        <Tabs style={{
            borderBottom: 0,
            fontFamily: 'Mark Pro Bold',
            textAlign: 'center'
        }} defaultActiveKey="1" centered={true} size="large">
            <TabPane tab="Buy" key="1">
                <BuySection />
            </TabPane>
            <TabPane tab="Sell" key="2">
                <SellSection />
            </TabPane>
            <TabPane tab="Profile" key="3">
                <ProfileSection />
            </TabPane>
        </Tabs>
    )
}

export default BuySellTab