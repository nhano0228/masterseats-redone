import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import BuyingPage from '../src/areas/BuyingPage'
import {Ticket} from '../api'
import { UserContext } from '../src/lib/UserContext';
import {seeIfLogin} from '../src/lib'
import OpenPage from '../src/areas/Universal/OpenPage'
import Loading from '../src/components/Loading'
import { resetSellingIfUndefined } from '../src/lib'

const Buying: React.FC = () => {
    const { api, setToken } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        seeIfLogin(api, setToken).then(() => {
            setIsLoading(false)
        })

        resetSellingIfUndefined()
    }, [])

    return (
        <>
            <Head>
                <title>MasterSeats • Buying</title>
            </Head>
            {isLoading ? <Loading/> : <BuyingPage />}
            
        </>
    );
};

export default Buying;