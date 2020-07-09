import React, {useContext, useEffect, CSSProperties} from 'react'
import {message} from 'antd'
import Head from 'next/head'
import RegisterCard from '../src/areas/RegisterCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/OpenPage'

const Register: React.FC = () => {
    const onFinish = ({uniq_id, password, rep_password, first_name, last_name}) => {
        if (password !== rep_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        } else {
            message.success("Please verify your email address before attempting to purchase or sell tickets.")
            OpenPage('/dashboard')
        }
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Register</title>
            </Head>
            <LoginBackground>
                <RegisterCard title={"Sign Up"} onFinish={onFinish} />
            </LoginBackground>
        </>
    );
};

export default Register;