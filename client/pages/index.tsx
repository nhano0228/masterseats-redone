import React, {useContext, useEffect, CSSProperties} from 'react'
import Head from 'next/head'
import MainPage from '../src/areas/Home'
import LoginCard from '../src/areas/LoginCard'
import styled from 'styled-components'
import LoginBackground from '../src/components/LoginBackground'
import OpenPage from '../src/areas/Universal/OpenPage'
import {UserContext} from '../src/lib/UserContext'

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