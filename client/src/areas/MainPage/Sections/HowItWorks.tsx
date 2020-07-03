import React from 'react'
import { Typography, Layout, Button, Space, Divider } from 'antd';
import styled from 'styled-components'
import {TitleStyled, SubtitleStyled as Subtitle} from '../Sections.styled/Universal'

const DividerStyled = styled(Divider)`
    border-top-color: rgba(0,39,76, 0.75);
`

const Container = styled(Layout)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 10%;
    background-color: rgba(0,0,0,0);
`

const MiniContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
`

const SubtitleStyled = styled(Subtitle)`
    text-align: left;
`

const HowItWorks: React.FC = () => {
    return (
        <Container>
            <TitleStyled level={2}>How It Works</TitleStyled>
            <DividerStyled/>
            <MiniContainer>
                <SubtitleStyled level={4}>Buying</SubtitleStyled>
            </MiniContainer>
        </Container>
    )
}

export default HowItWorks