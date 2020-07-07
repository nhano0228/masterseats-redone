import React, { CSSProperties } from 'react'
import {Card} from 'antd'
import styled from 'styled-components'
import media from "styled-media-query";

const MasterSeatsContainer = styled(Card)`
    width: 100vh;

    ${media.lessThan("small")`
        width: auto !important;
    `}
`
interface MasterSeatsCardProps {
    withLink?: boolean
    withLogo?: boolean
    style?: CSSProperties
}

const MasterSeatsCard: React.FC<MasterSeatsCardProps> = (props) => {
    var logo = <img height={35} src={require('../../assets/images/logo/logo.png')}/>
    if (props.withLink) {
        logo =  <a href={'/'}>
                    <img height={35} src={require('../../assets/images/logo/logo.png')}/>
                </a>
    } else if (props.withLogo === false) {
        logo = null
    }

    return (
        <MasterSeatsContainer bodyStyle={{padding: props.withLogo === false ? 0 : 'auto'}} 
            style={{paddingLeft: props.withLogo === false ? 0 : 20, 
                    paddingRight: props.withLogo === false ? 0 : 20, 
                    ...props.style
                    }} 
            title={logo}>
                {props.children}
        </MasterSeatsContainer>
    )
}

export default MasterSeatsCard