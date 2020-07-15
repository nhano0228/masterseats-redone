import React, {ReactNode, useEffect, useState} from 'react'
import { Typography, Layout, Space, Carousel, Divider, Grid } from 'antd';
import {SmileOutlined, LockOutlined, ClockCircleOutlined, DollarCircleOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {ScreenSize} from '../../../lib'
import {TitleYellowStyled, SubtitleYellowStyled} from './Sections.styled'
import _ from 'lodash'
import media from "styled-media-query";

const {useBreakpoint} = Grid
const {Paragraph} = Typography

const DividerStyled = styled(Divider)`
    border-top-color: #FFCB05;
`

const VerticalDivider = styled(Divider)`
    border-left-color: rgba(255,203,5, 0.75);
    min-height: 200px;
`

const Container = styled(Layout)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 150px;
    background-color: rgba(0,0,0,0);
`

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const SectionAboveContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BoxContainer = styled.div`
    padding: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;

    ${media.lessThan("small")`
        padding: inherit;
    `}
`

const BoxParagraph = styled(Paragraph)`
    font-family: 'Mark Pro';
    color: #FFCB05 !important;
    text-align: center;
    font-size: 17px;
`

const WhyUsTitle = styled(TitleYellowStyled)`
    ${media.lessThan("small")`
        margin-bottom: 25px !important;
    `}
`

const ICON_OBJ = (isBigSize: boolean) => {
    return {fontSize: isBigSize ? 80 : 50, paddingBottom: 25, color: 'rgba(255,203,5, 0.9)'}
}

interface BoxProps {
    title: string
    message: string
    icon: ReactNode
}

const Box: React.FC<BoxProps> = (props) => {
    const {title, message, icon} = props
    return (
        <BoxContainer>
            {icon}
            <SubtitleYellowStyled level={4}>{title}</SubtitleYellowStyled>
        </BoxContainer>
    )
}

const WhyUs: React.FC = () => {
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
    const icon_props = ICON_OBJ(screenSize >= 1)

    return (
        <Container>
            <WhyUsTitle>Why Us?</WhyUsTitle>
            <SectionAboveContainer>
                <SectionContainer>
                    <Box 
                        icon={<SmileOutlined style={icon_props} />}
                        title={'Convenient'}
                        message={'We find buyers and sellers so you don\'t have to. Simply list a request and we\'ll find the perfect match.'}
                    />
                    <VerticalDivider type="vertical"/>
                    <Box 
                        icon={<LockOutlined style={icon_props} />}
                        title={'Secure'}
                        message={'We only allow those with an .edu email address. This ensures our users are more protected from scammers.'}
                    />
                </SectionContainer>
                <DividerStyled style={{margin: 0}}/>
                <SectionContainer>
                    <Box 
                        icon={<ClockCircleOutlined style={icon_props} />}
                        title={'Quick'}
                        message={'We streamline the ticket exchange process. You simply choose or list your ticket without wasting time communicating with anyone!'}
                    />
                    <VerticalDivider type="vertical"/>
                    <Box 
                        icon={<DollarCircleOutlined style={icon_props}/>}
                        title={'Cheap'}
                        message={'By offering a platform for a free-market, we ensure you can compare prices to other offerings so you buy the ticket right for you!'}
                    />
                </SectionContainer>
            </SectionAboveContainer>
        </Container>
    )
}

export default WhyUs