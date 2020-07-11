import styled from 'styled-components'
import {Button, Select, Typography} from 'antd'
import {DollarOutlined, CloseOutlined, PlusCircleOutlined} from '@ant-design/icons'
import React, {CSSProperties} from 'react'
import {MichiganFootballGame} from '../../../api'
import media from "styled-media-query";


export const PlusCircleAdjustedOutline = styled(PlusCircleOutlined)`
    ${media.lessThan("small")`
        font-size: 20px;
    `}
`

export const DollarAdjustedOutline = styled(DollarOutlined)`
    ${media.lessThan("small")`
        font-size: 25px;
    `}
`

export const CloseAdjustedOutline = styled(CloseOutlined)`
    ${media.lessThan("small")`
        font-size: 25px;
    `}
`

export const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 15px;
    padding-bottom: 30px;
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
`

export const AddTicketContainer = styled(FilterContainer)`
    justify-content: flex-end;
    ${media.lessThan("small")`
        justify-content: center;
    `}
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;

    ${media.lessThan("small")`
        flex-direction: column !important;
    `}
`

export const EmojifiedImage = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-right: 5px;
`

export const GenButton = styled(Button)`
    background-color: #00274c;
    color: #fff;
    font-family: 'Mark Pro';
    padding-bottom: 18px !important;
    padding-top: 18px !important;
    padding-left: 30px !important;
    padding-right: 30px !important;
    font-size: 14px;
    &:hover {
        background-color: #00274c;
        color: #fff;
        opacity: 0.7;
    }

    &:focus {
        background-color: #00274c;
        color: #fff;
    }

    ${media.lessThan("small")`
        padding-left: 20px !important;
        padding-right: 40px !important;
    `}
`

export const PurchaseContainer = styled.div`
    display: flex; 
    justify-content: flex-end;

    ${media.lessThan("small")`
        justify-content: flex-start;
    `}

`

export const GenIconButton = styled(Button)`
    background-color: rgba(0,0,0,0);
    color: #00274c;
    box-shadow: none;
    &:hover {
        background-color: rgba(0,0,0,0);
        color: #00274c;
        opacity: 0.7;
    }

    &:focus {
        background-color: rgba(0,0,0,0);
        color: #00274c;
    }

    ${media.lessThan("small")`
        padding: 0 !important;
        width: fit-content;
    `}
`

const EmojiGameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 45px;

    ${media.lessThan("small")`
        flex-direction: column !important;
        max-height: fit-content;
    `}
`

export const returnEmojiString = (game: MichiganFootballGame) => {
    var destination = <EmojifiedImage src={require('../../../assets/images/football/ballstate.png')}/>
    switch (game) {
        case MichiganFootballGame.ArkansasState:
            destination = <EmojifiedImage src={require('../../../assets/images/football/arkansasstate.png')}/>
            break;
        case MichiganFootballGame.PennState:
            destination = <EmojifiedImage src={require('../../../assets/images/football/pennstate.png')}/>
            break;
        case MichiganFootballGame.Maryland:
            destination = <EmojifiedImage src={require('../../../assets/images/football/maryland.png')}/>
            break;
        case MichiganFootballGame.Indiana:
            destination = <EmojifiedImage src={require('../../../assets/images/football/indiana.png')}/>
            break;
        case MichiganFootballGame.Wisconsin:
            destination = <EmojifiedImage src={require('../../../assets/images/football/wisconsin.png')}/>
            break;
        
    }

    return (
        <EmojiGameContainer>
            <EmojifiedImage src={require('../../../assets/images/football/michigan.png')}/>
            <Typography.Paragraph style={{marginLeft: 10, marginRight: 4, marginBottom: 0}}>{' vs. '}</Typography.Paragraph>
            {destination}
        </EmojiGameContainer>)
}