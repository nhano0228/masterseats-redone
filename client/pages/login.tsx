import React, {useContext, useEffect } from 'react'
import {message} from 'antd'
import Head from 'next/head'
import LoginCard from '../src/areas/LoginCard'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/Universal/OpenPage'
import {UserContext} from '../src/lib/UserContext'
import { resetSellingIfUndefined } from '../src/lib'

const Login: React.FC = () => {
    const { setToken, api, currentUser } = useContext(UserContext)
    const onFinish = async ({uniq_id, password}) => {
        try {
            const email = uniq_id
            const res = await api.login({email, password})
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            await setToken(res.data, true)
            OpenPage('/dashboard')
        } catch (error) {
            if (error.response.status === 410) {
                message.info("Please remember to verify your email before trying to login.")
            } else {
                message.error("Your email and/or password were incorrect. Please try again.")
            }
        }
    }

    useEffect(() => {
        resetSellingIfUndefined()
    }, [])

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