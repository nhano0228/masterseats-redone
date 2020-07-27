import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ForgotPasswordComponent from '../src/areas/LoginCard/ForgotPasswordComponent'
import {UserContext} from '../src/lib/UserContext'
import {useRouter} from 'next/router'
import VerifyEmailComponent from '../src/areas/VerifyEmail'

const VerifyEmail: React.FC = () => {
    return (
        <>
            <Head>
                <title>MasterSeats • Email Verification</title>
            </Head>
            <VerifyEmailComponent />
        </>
    );
};

export default VerifyEmail;