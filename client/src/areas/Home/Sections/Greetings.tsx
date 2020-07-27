import React from 'react'
import { Typography, Layout, Button, Space } from 'antd';
import styled from 'styled-components'
import {TitleStyled, SubtitleStyled} from './Sections.styled'
import OpenPage from '../../Universal/OpenPage'
import media from "styled-media-query";

const { Content } = Layout
const {Title, Paragraph} = Typography

const Container = styled(Space)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: -7%;
    ${media.lessThan("large")`
        margin-top: -2%;
    `}
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

    ${media.lessThan("medium")`
        font-size: 15px;
        padding: 20px !important;
    `}
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

interface GreetingsProps {
    title: string
    subtitle: string
}

const Greetings: React.FC<GreetingsProps> = props => {
    const {title, subtitle} = props
    const sellingOnClick = () => {
        OpenPage('/selling')
    }

    const buyingOnClick = () => {
        OpenPage('/buying')
    }

    return (
        <Container size="middle" direction="vertical">
            <TitleStyled>{title}</TitleStyled>
            <SubtitleStyled level={4}>{subtitle}</SubtitleStyled>
            <ButtonContainer>
                <GetStartedButton onClick={buyingOnClick}>I'm Buying</GetStartedButton>
                <GetStartedButton style={{marginLeft: 25}} onClick={sellingOnClick}>I'm Selling</GetStartedButton>
            </ButtonContainer>
        </Container>
    )
}

export default Greetings