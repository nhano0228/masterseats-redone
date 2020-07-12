import styled from 'styled-components'
import {Select} from 'antd'
import React, {CSSProperties} from 'react'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions} from '../../api'

import media from "styled-media-query";

const { Option } = Select;

const GAMES = Object.keys(MichiganFootballGame)
const FILTER_OPTIONS = Object.keys(FilterOptions)

export const SelectStyled = styled(Select)`
    text-align: left;
    width: 40%;
    margin-right: 15px;
    
    ${media.lessThan("small")`
        width: 90%;
        margin-bottom: 10px;
    `}
`

const FilterSelectStyled = styled(SelectStyled)`
    ${media.lessThan("small")`
        margin-bottom: 0px;
    `}
`

interface SelectGameProps {
    value: string
    setValue: (val: MichiganFootballGame) => void
    style?: CSSProperties
}

interface SelectFilterProps {
    value: string
    setValue: (val: FilterOptions) => void
}

export const GameSelect: React.FC<SelectGameProps> = (props) => {
    const {value, setValue, style} = props
    return (
        <SelectStyled
            style={{...style}}
            showSearch
            value={value}
            onSelect={(e) => setValue(e as MichiganFootballGame)}
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
    )
}

export const FilterSelect: React.FC<SelectFilterProps> = (props) => {
    const {value, setValue} = props
    return (
        <FilterSelectStyled
            placeholder="Select a filter option"
            optionFilterProp="children"
            value={value}
            onSelect={(e) => setValue(e as FilterOptions)}
            >
            {_.map(FILTER_OPTIONS, (filter) => {
                return (
                    <Option value={filter.toLowerCase()}>{filter}</Option>
                )
            })}
        </FilterSelectStyled>
    )
}
