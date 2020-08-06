import React, {useContext, useEffect, CSSProperties} from 'react'
import Head from 'next/head'
import MainPage from '../src/areas/Home'
import OpenPage from '../src/areas/Universal/OpenPage'

const Index: React.FC = () => {
    useEffect(() => {
        const email = localStorage.getItem('email')
        if (email !== "" && email !== null) {
            OpenPage('/dashboard')
        }
    }, [])

    return (
        <>
            <Head>
                <title>MasterSeats • Home</title>
            </Head>
            <MainPage/>
        </>
    );
};

export default Index;