
import React from 'react'
import {Spin} from 'antd'
import styled from 'styled-components'

const SpinContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loading: React.FC = () => {
    return (<SpinContainer><Spin size="large"/></SpinContainer> )
}

export default Loading