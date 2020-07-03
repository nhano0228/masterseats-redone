import React, {ReactNode} from 'react'
import { Typography, Layout, Space, Carousel, Divider } from 'antd';
import {SmileOutlined, LockOutlined, ClockCircleOutlined, DollarCircleOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import {TitleYellowStyled, SubtitleYellowStyled} from './Sections.styled'
import _ from 'lodash'

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
`

const BoxParagraph = styled(Paragraph)`
    font-family: 'Mark Pro';
    color: #FFCB05 !important;
    text-align: center;
    font-size: 17px;
`

const ICON_OBJ = {fontSize: 80, paddingBottom: 25, color: 'rgba(255,203,5, 0.9)' }

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
    return (
        <Container>
            <TitleYellowStyled>Why Us?</TitleYellowStyled>
            <SectionAboveContainer>
                <SectionContainer>
                    <Box 
                        icon={<SmileOutlined style={ICON_OBJ} />}
                        title={'Convenient'}
                        message={'We find buyers and sellers so you don\'t have to. Simply list a request and we\'ll find the perfect match.'}
                    />
                    <VerticalDivider type="vertical"/>
                    <Box 
                        icon={<LockOutlined style={ICON_OBJ} />}
                        title={'Secure'}
                        message={'We only allow those with an .edu email address. This ensures our users are more protected from scammers.'}
                    />
                </SectionContainer>
                <DividerStyled style={{margin: 0}}/>
                <SectionContainer>
                    <Box 
                        icon={<ClockCircleOutlined style={ICON_OBJ} />}
                        title={'Quick'}
                        message={'We streamline the ticket exchange process. You simply choose or list your ticket without wasting time communicating with anyone!'}
                    />
                    <VerticalDivider type="vertical"/>
                    <Box 
                        icon={<DollarCircleOutlined style={ICON_OBJ}/>}
                        title={'Cheap'}
                        message={'By offering a platform for a free-market, we ensure you can compare prices to other offerings so you buy the ticket right for you!'}
                    />
                </SectionContainer>
            </SectionAboveContainer>
        </Container>
    )
}

export default WhyUs