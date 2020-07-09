import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import BuyingPage from '../src/areas/BuyingPage'

const Buying: React.FC = () => {
    const onFinish = () => {}

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