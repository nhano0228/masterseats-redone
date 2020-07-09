import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import SellingPage from '../src/areas/SellingPage'

const Selling: React.FC = () => {
    const onFinish = () => {}

    return (
        <>
            <Head>
                <title>MasterSeats • Selling</title>
            </Head>
            <SellingPage />
        </>
    );
};

export default Selling;