import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import BuyingPage from '../src/areas/BuyingPage'
import {Ticket} from '../api'
import { UserContext } from '../src/lib/UserContext';

const Buying: React.FC = () => {
    return (
        <>
            <Head>
                <title>MasterSeats • Buying</title>
            </Head>
            <BuyingPage />
        </>
    );
};

export default Buying;