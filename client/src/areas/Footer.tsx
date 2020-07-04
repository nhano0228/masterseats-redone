import React from 'react'
import {Layout } from 'antd'
import Emoji from '../components/Emoji'

const {Footer} = Layout

const FooterPage: React.FC = () => {
    return (
            <Footer style={{ textAlign: 'center', fontFamily: 'Mark Pro', zIndex: 3 }}>
                © MasterSeats • Made with <Emoji label={'heart'} symbol={'❤️'}/> in Ann Arbor
            </Footer>
        )
}

export default FooterPage