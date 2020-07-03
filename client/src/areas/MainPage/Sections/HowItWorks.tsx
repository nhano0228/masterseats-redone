import React from 'react'
import { Typography, Layout, Space, Carousel, Divider } from 'antd';
import styled from 'styled-components'
import {TitleStyled, SubtitleStyled} from './Sections.styled'
import _ from 'lodash'

const DividerStyled = styled(Divider)`
    border-top-color: rgba(0,39,76, 0.75);
`

const VerticalDivider = styled(Divider)`
    border-left-color: rgba(0,39,76, 0.75);
    height: 100%;
`

const Container = styled(Layout)`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 150px;
    background-color: rgba(0,0,0,0);
`

const MiniContainer = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 10%;
    padding-top: 3%;
`

const CarouselContainer = styled(Carousel)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(0,39,76);
`

const CardContainer = styled.div`
    padding: 30px;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const CarouselImage = styled.img`
    max-height: 200px;
    margin-bottom: 20px;
    max-width: 90%;
`

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
`

const BUYING_DATA: {text: string, img: object}[] = [
                    {text: 'Search for a ticket', img: require('../../../../assets/images/carousel/buy/search.png')}, 
                    {text: 'Purchase your desired ticket', img: require('../../../../assets/images/carousel/buy/purchase.png')}, 
                    {text: 'Your ticket will be e-transfered to you', img: require('../../../../assets/images/carousel/buy/transfer.png')}, 
                    {text: 'Confirm you\'ve received the ticket', img: require('../../../../assets/images/carousel/buy/confirm.png')}, 
                    {text: 'Watch your favorite team win!', img: require('../../../../assets/images/carousel/buy/win.png')}
                ];

const SELLING_DATA: {text: string, img: object}[] = [
                    {text: 'Tell us about your ticket', img: require('../../../../assets/images/carousel/sell/talk.png')}, 
                    {text: 'Wait for a buyer to purchase', img: require('../../../../assets/images/carousel/sell/wait.png')}, 
                    {text: 'E-transfer your ticket', img: require('../../../../assets/images/carousel/sell/sell.png')}, 
                    {text: 'Receive your payment!', img: require('../../../../assets/images/carousel/sell/receive.png')}
                ];

interface SectionProps {
    title: string;
    data: {text: string, img: object}[]
}              

const Section: React.FC<SectionProps> = (props) => {
    const {title, data} = props
    return (
        <MiniContainer>
                <SubtitleStyled level={3}>{title}</SubtitleStyled>
                <CarouselContainer>
                    {_.map(data, ({text, img}) => {
                        return (
                            <CardContainer>
                                <CarouselImage src={img}/>
                                <SubtitleStyled style={{fontFamily: 'Mark Pro', textAlign: 'center', paddingBottom: 15, fontSize: 17}} level={4}>{text}</SubtitleStyled>
                            </CardContainer>
                        )
                    })}
                </CarouselContainer>
        </MiniContainer>
    )
}

const HowItWorks: React.FC = () => {
    return (
        <Container>
            <TitleStyled level={2}>How It Works</TitleStyled>
            <DividerStyled/>
            <SectionContainer>
                <Section title={'Buy'} data={BUYING_DATA}/>
                <VerticalDivider type="vertical"/>
                <Section title={'Sell'} data={SELLING_DATA}/>
            </SectionContainer>
        </Container>
    )
}

export default HowItWorks