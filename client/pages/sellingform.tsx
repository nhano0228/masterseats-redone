import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import SellingFormComponent from '../src/areas/TicketWallet/SellingFormComponent'
import LoginBackground from '../src/components/LoginBackground'

const SellingForm: React.FC = () => {
    return (
        <>
            <Head>
                <title>MasterSeats • Selling Form</title>
            </Head>
            <LoginBackground>
                <SellingFormComponent />
            </LoginBackground>
        </>
    );
};

export default SellingForm;