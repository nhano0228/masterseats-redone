import React, { CSSProperties } from 'react'
import {Card} from 'antd'

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
        <Card bodyStyle={{padding: props.withLogo === false ? 0 : 'auto'}} 
            style={{paddingLeft: props.withLogo === false ? 0 : 20, 
                    paddingRight: props.withLogo === false ? 0 : 20, 
                    width: '100vh',
                    ...props.style
                    }} 
            title={logo}>
                {props.children}
        </Card>
    )
}

export default MasterSeatsCard