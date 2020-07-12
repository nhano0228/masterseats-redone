import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import LoginCard from '../src/areas/LoginCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/OpenPage'
import {DefaultApi} from '../api'

const Login: React.FC = () => {
    const onFinish = async ({uniq_id, password}) => {
        try {
            const res = await new DefaultApi().login({email: uniq_id + "@umich.edu", password})
            const token = res.data
            OpenPage('/dashboard')
        } catch (error) {
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