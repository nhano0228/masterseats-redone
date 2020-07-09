import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import DashboardPage from '../src/areas/DashboardPage'

const Dashboard: React.FC = () => {
    const onFinish = () => {}

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