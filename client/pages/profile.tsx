import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ResetPasswordComponent from '../src/areas/LoginCard/ResetPasswordComponent'
import ProfileComponent from '../src/areas/Profile'
import OpenPage from '../src/areas/OpenPage'
import {UserContext} from '../src/lib/UserContext'
import { seeIfLogin } from '../src/lib'

const Profile: React.FC = () => {
    const { api, setToken } = useContext(UserContext)

    useEffect(() => {
        seeIfLogin(api, setToken, () => OpenPage('/'))
    }, [])
    
    return (
        <>
            <Head>
                <title>MasterSeats • Profile</title>
            </Head>
            <LoginBackground>
                <ProfileComponent />
            </LoginBackground>
        </>
    );
};

export default Profile;