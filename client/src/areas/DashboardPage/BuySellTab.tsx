import React from 'react'
import { Tabs } from 'antd';
import styled from 'styled-components'
import SellSection from './SellSection'
import BuySection from './BuySection'

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
        </Tabs>
    )
}

export default BuySellTab