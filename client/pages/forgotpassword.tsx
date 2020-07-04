import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ForgotPasswordComponent from '../src/areas/LoginCard/ForgotPasswordComponent'

const ForgotPassword: React.FC = () => {
    const onFinish = () => {}

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