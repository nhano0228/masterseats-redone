import React, {CSSProperties, ReactNode, useState, useEffect} from 'react'
import {Row, Col, Grid} from 'antd'
import {ScreenSize} from '../lib'
import styled from 'styled-components'
import media from 'styled-media-query'
const {useBreakpoint} = Grid

const RowStyled = styled(Row)`
    ${media.lessThan("small")`
        padding-left: 35px;
        padding-right: 35px;
        width: fit-content;
    `}
`

interface PageProps {
    style?: CSSProperties
    children?: ReactNode
}

const Page: React.FC<PageProps> = (props) => {
    const screens = useBreakpoint()
    const [screenSize, setScreenSize] = useState<ScreenSize>(undefined)
    
    useEffect(() => {
        Object.entries(screens)
        .filter(screen => !!screen[1])
        .map(screen => {
            if (screen[0] !== ScreenSize[screenSize]) {
                setScreenSize(ScreenSize[screen[0]])
            }
        })
    }, [screens])
    return (
        <RowStyled style={{...props.style}}>
            {screenSize <= 2 ? 
                <Col style={props.style} span={24}>
                    {props.children}
                </Col>
            : 
            <>
                <Col span={2}/>
                <Col style={props.style} span={20}>
                    {props.children}
                </Col>
                <Col span={2}/>
            </>
            }
        </RowStyled>
    )
}

export default Page