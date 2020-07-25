import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import DashboardPage from '../src/areas/DashboardPage'
import OpenPage from '../src/areas/OpenPage'
import {UserContext} from '../src/lib/UserContext'
import { seeIfLogin } from '../src/lib'

const Dashboard: React.FC = () => {
    const { api, setToken } = useContext(UserContext)

    useEffect(() => {
        seeIfLogin(api, setToken, () => OpenPage('/'))
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