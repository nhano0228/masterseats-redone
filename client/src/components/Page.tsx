import React, {CSSProperties, ReactNode} from 'react'
import {Row, Col} from 'antd'

interface PageProps {
    style: CSSProperties
    children?: ReactNode
}

const Page: React.FC<PageProps> = (props) => {
    return (
        <Row style={props.style}>
                <Col span={4}/>
                <Col style={props.style} span={16}>
                    {props.children}
                </Col>
                <Col span={4}/>
        </Row>
    )
}

export default Page