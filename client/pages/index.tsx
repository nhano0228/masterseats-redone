import React from 'react'
import Head from 'next/head'
import MainPage from '../src/areas/MainPage'

const Index: React.FC = () => {
    return (
        <>
            <Head>
                <title>MasterSeats</title>
            </Head>
            <MainPage/>
        </>
    );
};

export default Index;