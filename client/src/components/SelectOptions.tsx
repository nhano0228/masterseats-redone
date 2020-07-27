import styled from 'styled-components'
import {Select} from 'antd'
import React, {CSSProperties} from 'react'
import _ from 'lodash'
import {MichiganFootballGame, FilterOptions} from '../../api'
import media from "styled-media-query";

const { Option } = Select;

const GAMES = Object.values(MichiganFootballGame)
const FILTER_OPTIONS = Object.values(FilterOptions)
const SECTION_NUMS = _.range(25, 34)

export const SelectStyled = styled(Select)`
    text-align: left;
    width: 40%;
    margin-right: 15px;
    
    ${media.lessThan("large")`
        width: 90%;
        margin-bottom: 10px;
    `}
`

const FilterSelectStyled = styled(SelectStyled)`
    ${media.lessThan("large")`
        margin-bottom: 0px;
    `}
`

interface SelectGameProps {
    value: string
    setValue: (val: MichiganFootballGame) => void
    style?: CSSProperties
    hasAllGames: boolean
}

export const GameSelect: React.FC<SelectGameProps> = (props) => {
    const {value, setValue, style, hasAllGames} = props
    return (
        <SelectStyled
            style={{...style}}
            showSearch
            value={value}
            onSelect={(e) => setValue(e as MichiganFootballGame)}
            placeholder="Select a game"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.indexOf(input) >= 0
            }
        >
            {_.map((hasAllGames ? [...GAMES, "All Games"] : GAMES), (game) => {
                return (
                    <Option value={game}>{game}</Option>
                )
            })}
        </SelectStyled>
    )
}

interface SectionSelectProps {
    value: number
    setValue: (val: number) => void
}

export const SectionSelect: React.FC<SectionSelectProps> = (props) => {
    const {value, setValue} = props
    return (
        <SelectStyled
            value={value}
            onSelect={(e) => setValue(e as number)}
            placeholder="Select a section"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.indexOf(input) >= 0
            }
        >
            {_.map(SECTION_NUMS, (num) => {
                return (
                    <Option value={num}>{num}</Option>
                )
            })}
        </SelectStyled>
    )
}

interface SelectFilterProps {
    value: string
    setValue: (val: FilterOptions) => void
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
                    <Option value={filter}>{filter}</Option>
                )
            })}
        </FilterSelectStyled>
    )
}
