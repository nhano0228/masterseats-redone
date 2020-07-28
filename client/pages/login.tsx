import React, {useContext } from 'react'
import {message} from 'antd'
import Head from 'next/head'
import LoginCard from '../src/areas/LoginCard'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/Universal/OpenPage'
import {UserContext} from '../src/lib/UserContext'

const Login: React.FC = () => {
    const { setToken, api } = useContext(UserContext)
    const onFinish = async ({uniq_id, password}) => {
        try {
            const email = uniq_id + "@umich.edu"
            const res = await api.login({email, password})
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
            await setToken(res.data)
            OpenPage('/dashboard')
        } catch (error) {
            if (error.response.status === 410) {
                message.info("Please remember to verify your email before trying to login.")
            } else {
                message.error("Your email and/or password were incorrect. Please try again.")
            }
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