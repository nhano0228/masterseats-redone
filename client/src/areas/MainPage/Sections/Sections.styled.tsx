import styled from 'styled-components'
import { Typography, Layout, Button, Space } from 'antd';
import media from "styled-media-query";

const {Title, Paragraph} = Typography

export const TitleStyled = styled(Title)`
    text-align: center;
    font-family: 'Mark Pro Bold';
    margin-bottom: 5px !important;
    ${media.lessThan("medium")`
        font-size: 24px !important;
    `}
`

export const SubtitleStyled = styled(TitleStyled)`
    font-family: 'Mark Pro Medium';
    margin-bottom: 10px !important;
    ${media.lessThan("medium")`
        font-size: 16px !important;
    `}
`

export const TitleYellowStyled = styled(TitleStyled)`
    color: #FFCB05 !important;
`

export const SubtitleYellowStyled = styled(SubtitleStyled)`
    color: #FFCB05 !important;
    font-family: 'Mark Pro';
`