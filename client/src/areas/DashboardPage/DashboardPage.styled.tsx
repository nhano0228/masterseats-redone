import styled from 'styled-components'
import {Button, Select, Typography} from 'antd'
import React, {CSSProperties} from 'react'
import {MichiganFootballGame} from '../../../model'

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

export const SelectStyled = styled(Select)`
    text-align: left;
    width: 40%;
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
`

export const EmojifiedImage = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-right: 5px;
`

interface SearchButtonProps {
    onClick: () => void
    children: string
    style?: CSSProperties
}

export const SearchButton: React.FC<SearchButtonProps> = (props) => {
    const {onClick, children, style} = props
    return (
        <Button style={{
            color: '#00274c',
            border: '1px solid #00274c',
            paddingBottom: 4,
            paddingTop: 4,
            ...style
        }} onClick={onClick}>
            {children}
        </Button>
    )
}

export const returnEmojiString = (game: MichiganFootballGame) => {
    var destination = <EmojifiedImage src={require('../../../assets/images/football/ballstate.png')}/>
    switch (game) {
        case MichiganFootballGame.Arkansas:
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
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', maxHeight: 45}}>
            <EmojifiedImage src={require('../../../assets/images/football/michigan.png')}/>
            <Typography.Paragraph style={{marginLeft: 10, marginRight: 4, marginBottom: 0}}>{' vs. '}</Typography.Paragraph>
            {destination}
        </div>)
}