import React, { useState } from 'react'
import { Select, Button, Table, Typography } from 'antd';
import styled from 'styled-components'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions, Ticket} from '../../../../model'
import {
    GenButton, 
    Container, 
    FilterContainer, 
    SelectContainer, 
    returnEmojiString, 
    GenIconButton
    } from '../DashboardPage.styled'
import {SearchOutlined, DollarOutlined} from '@ant-design/icons'
import {GameSelect, FilterSelect} from '../../../components/SelectOptions'

const COLUMNS = [
    {
        title: 'Game',
        key: 'game',
        dataIndex: 'game',
        render: (text, data) => returnEmojiString(data.game)
    },
    {
        title: 'Section',
        key: 'section',
        dataIndex: 'section'
    },
    {
        title: 'Price ($)',
        key: 'price',
        dataIndex: 'price'
    },
    {
        title: '',
        key: 'buy',
        dataIndex: 'ticketId',
        render: (text, data) => (
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <GenIconButton icon={<DollarOutlined/>} onClick={() => {}}>
                    Purchase
                </GenIconButton>
            </div>
          )
    }
];
  
const DATA: Ticket[] = [
    {
        game: MichiganFootballGame.Ball,
        price: 25,
        id: '12345',
        section: 24
    },
    {
        game: MichiganFootballGame.Arkansas,
        price: 25,
        id: '1234567',
        section: 25
    },
    {
        game: MichiganFootballGame.Wisconsin,
        price: 25,
        id: '1234578',
        section: 26
    },
    {
        game: MichiganFootballGame.Ball,
        price: 25,
        id: '1234576',
        section: 27
    },
    {
        game: MichiganFootballGame.PennState,
        price: 25,
        id: '1234554',
        section: 20
    },
    {
        game: MichiganFootballGame.Wisconsin,
        price: 25,
        id: '1234532',
        section: 19
    },
    
];



const Buy: React.FC = () => {
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [filterValue, setFilterValue] = useState<FilterOptions>(undefined)

    return (
        <Container>
            <FilterContainer>
                <SelectContainer>
                    <GameSelect style={{marginRight: 15}} value={gameValue} setValue={(e) => setGameValue(e)}/>
                    <FilterSelect value={filterValue} setValue={(e) => setFilterValue(e)} />
                </SelectContainer>
                <GenButton onClick={() => {}} icon={<SearchOutlined />}>
                    Search
                </GenButton>
            </FilterContainer>
            <Table columns={COLUMNS} dataSource={DATA} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default Buy