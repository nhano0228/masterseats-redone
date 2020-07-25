import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ResetPasswordComponent from '../src/areas/LoginCard/ResetPasswordComponent'
import OpenPage from '../src/areas/OpenPage'
import {useRouter} from 'next/router'
import {UserContext} from '../src/lib/UserContext'
import { ChangePassword } from '../api'

const ResetPassword: React.FC = () => {
    const {api} = useContext(UserContext)
    const router = useRouter()
    
    const resetPassword = async (body_change) => {
        if (body_change.new_password !== body_change.repeat_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        }

        try {
            await api.changePassword({new_password: body_change.new_password, token: router.query.token as string})
            message.success("Your password has been changed. Please login with your new password.")
            OpenPage('/login')
        } catch (err) {
            message.error("There was a problem verifying your account. Please contact us.")
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Reset Password </title>
            </Head>
            <LoginBackground>
                <ResetPasswordComponent onFinish={resetPassword} />
            </LoginBackground>
        </>
    );
};

export default ResetPassword;