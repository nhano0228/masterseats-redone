import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ForgotPasswordComponent from '../src/areas/LoginCard/ForgotPasswordComponent'
import { UserContext } from '../src/lib/UserContext'
import { useRouter } from 'next/router'
import OpenPage from '../src/areas/OpenPage'

const Verification: React.FC = props => {
    const {api, setToken} = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        const verifyEmailFetch = async () => {
            if (router.query.token === undefined) return

            try {
                const body = await api.verifyEmail({id: router.query.token as string})
                setToken(body.data)
            } catch (err) {
                message.error("There was a problem verifying your account. Please contact us.")
            }
            OpenPage('/dashboard')
        }

        verifyEmailFetch()
    }, [])
    return (
        <>
            <Head>
                <title>MasterSeats • Email Verification</title>
            </Head>
            <LoginBackground>
                
            </LoginBackground>
        </>
    );
};

export default Verification;