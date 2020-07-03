import React from 'react'
import { Typography, Layout, Button, Space } from 'antd';
import styled from 'styled-components'
import {TitleStyled, SubtitleStyled} from './Sections.styled'

const { Content } = Layout
const {Title, Paragraph} = Typography

const Container = styled(Space)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: -7%;
`

const GetStartedButton = styled(Button)`
    font-family: 'Mark Pro Bold';
    color: #FFCB05;
    background-color: #00274c;
    font-size: 17px;
    &:hover, &:focus {
        color: #FFCB05;
        background-color: #00274c;
        opacity: 0.7;
    }
`

const Greetings: React.FC = () => {
    return (
        <Container size="middle" direction="vertical">
            <TitleStyled>The Sports Ticket Marketplace of the Future</TitleStyled>
            <SubtitleStyled level={4}>We make it both easier and safer to buy and sell Football tickets!</SubtitleStyled>
            <GetStartedButton>Get Started</GetStartedButton>
        </Container>
    )
}

export default Greetings