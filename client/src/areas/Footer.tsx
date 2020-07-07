import React from 'react'
import {Layout } from 'antd'
import Emoji from '../components/Emoji'
import styled from 'styled-components'
import media from 'styled-media-query'

const {Footer} = Layout

const FooterStyled = styled(Footer)`
    text-align: center;
    font-family: 'Mark Pro';
    z-index: 3;

    ${media.lessThan("small")`
        font-size: 12px;
    `}
`

const FooterPage: React.FC = () => {
    return (
            <FooterStyled>
                © MasterSeats • Made with <Emoji label={'heart'} symbol={'❤️'}/> in Ann Arbor
            </FooterStyled>
        )
}

export default FooterPage