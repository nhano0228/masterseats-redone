import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import LoginCard from '../src/areas/LoginCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/OpenPage'

const Login: React.FC = () => {
    const onFinish = ({email, password}) => {
        if (email == "test@test.com" && password == "password") {
            OpenPage('/dashboard')
        } else {
            message.error("Your email and/or password were incorrect. Please try again.")
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Login</title>
            </Head>
            <LoginBackground>
                <LoginCard title={"Login"} onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default Login;