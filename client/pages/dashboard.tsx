import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import DashboardPage from '../src/areas/DashboardPage'
import OpenPage from '../src/areas/OpenPage'
import {UserContext} from '../src/lib/UserContext'

const Dashboard: React.FC = () => {
    const onFinish = () => {}
    const { api, setToken } = useContext(UserContext)

    useEffect(() => {
        const email = localStorage.getItem('email')
        const password = localStorage.getItem('password')
        const seeIfLogin = async () => {
            if (email !== null && email !== '') {
                try {
                    const body = await api.login({email: email, password: password})
                    setToken(body.data)
                } catch (err) {
                    console.error(err)
                }
            } else {
                OpenPage('/')
            }
        }

        seeIfLogin()
    }, [])

    return (
        <>
            <Head>
                <title>MasterSeats • Dashboard</title>
            </Head>
            <DashboardPage />
        </>
    );
};

export default Dashboard;