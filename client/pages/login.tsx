import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import LoginCard from '../src/areas/LoginCard'
import styled from 'styled-components'

const LoginFlowContainer = styled.div`
    background-color: #fff; 
    height: 100vh;
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;
`

const AbsoluteMaize = styled.div`
    height: 50vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #FFCB05;
`

export const LoginBackground: React.FC<{children: React.ReactNode, style?: CSSProperties}> = (props) => {
    return (
        <LoginFlowContainer style={props.style}>
            <AbsoluteMaize/>
            {props.children}
        </LoginFlowContainer>
    )
}

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>MasterSeats • Login</title>
            </Head>
            <LoginBackground>
                <LoginCard title={"Login"} onFinish={()=>{}} />
            </LoginBackground>
        </>
    );
};

export default Login;