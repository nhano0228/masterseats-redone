import React from 'react'
import { Select, Button, Table, Typography } from 'antd';
import styled from 'styled-components'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions, Ticket} from '../../../model'
import {SearchButton, Container, FilterContainer, SelectStyled, SelectContainer, returnEmojiString} from './DashboardPage.styled'

const { Option } = Select;
const GAMES: MichiganFootballGame[] = [MichiganFootballGame.Ball, 
                        MichiganFootballGame.Arkansas, 
                        MichiganFootballGame.Wisconsin, 
                        MichiganFootballGame.PennState, 
                        MichiganFootballGame.Maryland, 
                        MichiganFootballGame.Indiana 
                    ]

const FILTER_OPTIONS: FilterOptions[] = [FilterOptions.LowestHighest, 
                        FilterOptions.HighestLowest,
                        FilterOptions.LowestSection,
                        FilterOptions.HighestSection
                    ]

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
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SearchButton style={{width: '65%', padding: 20, backgroundColor: '#00274c', color: '#fff'}} onClick={() => {
                        console.log('ticketId: ' + data.ticketId)
                    }}>
                        Purchase
                </SearchButton>
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



const BuySection: React.FC = () => {

    return (
        <Container>
            <FilterContainer>
                <SelectContainer>
                    <SelectStyled
                        style={{marginRight: 15}}
                        showSearch
                        placeholder="Select a game"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {_.map(GAMES, (game) => {
                            return (
                                <Option value={game.toLowerCase()}>{game}</Option>
                            )
                        })}
                    </SelectStyled>
                    <SelectStyled
                        placeholder="Select a filter option"
                        optionFilterProp="children"
                    >
                        {_.map(FILTER_OPTIONS, (filter) => {
                            return (
                                <Option value={filter.toLowerCase()}>{filter}</Option>
                            )
                        })}
                    </SelectStyled>
                </SelectContainer>
                <SearchButton onClick={() => {}}>
                    {'Search 🔍'}
                </SearchButton>
            </FilterContainer>
            <Table columns={COLUMNS} dataSource={DATA} pagination={{ position: ['bottomCenter'] }} />
        </Container>
    )
}

export default BuySection