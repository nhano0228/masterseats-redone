import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ForgotPasswordComponent from '../src/areas/LoginCard/ForgotPasswordComponent'
import {UserContext} from '../src/lib/UserContext'
import {useRouter} from 'next/router'

const ForgotPassword: React.FC = () => {
    const {api, setToken} = useContext(UserContext)

    const onFinish = async (info) => {
        try {
            await api.forgotPasswordEmail({email: info.email})
            message.success("An email was sent to help you create a new password.")
        } catch(error) {
            message.error("There was a problem finding your email a")
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Forgot Password</title>
            </Head>
            <LoginBackground>
                <ForgotPasswordComponent onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default ForgotPassword;