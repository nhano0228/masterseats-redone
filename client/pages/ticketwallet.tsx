import React, {useContext, useState, useEffect} from 'react'
import {Spin} from 'antd'
import Head from 'next/head'
import SellingPage from '../src/areas/SellingPage'
import { UserContext } from '../src/lib/UserContext';
import {seeIfLogin} from '../src/lib'
import OpenPage from '../src/areas/Universal/OpenPage'
import styled from 'styled-components'
import Loading from '../src/components/Loading';


const Selling: React.FC = () => {
    const { api, setToken } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        seeIfLogin(api, setToken).then(() => {
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <Head>
                <title>MasterSeats • Selling</title>
            </Head>
            {isLoading ? <Loading/> : <SellingPage />}
        </>
    );
};

export default Selling;