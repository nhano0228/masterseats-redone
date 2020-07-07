import styled from 'styled-components'
import {Typography, Button} from 'antd'

export const OuterContainer = styled.div`
    width: 100%;
    height: 100vh;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    align-items: center;
    justify-content: center;
`

export const BottomText = styled(Typography.Text)`
    font-family: 'Mark Pro';
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
`

export const ButtonLink = styled(Button)`
    padding: 0;
    font-weight: bold;
    margin-left: 5px !important;
    padding: 0px !important;
`

export const CardButton = styled(Button)`
    width: 60%;
    margin-top: 60px;
`