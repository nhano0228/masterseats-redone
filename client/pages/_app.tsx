import React, {useEffect} from 'react'
import Head from 'next/head'
import '../assets/theme.less'
import {createGlobalStyle} from 'styled-components'
import { NextSeo } from 'next-seo';

const GlobalInjection = createGlobalStyle`
    .ant-menu {
        background: rgba(0,0,0,0);
    }
    .ant-menu-vertical {
        border-right: 0px solid #fff;
    }

    .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
        background-color: rgba(0,0,0,0);
        border-radius: 15px;
    }

    h1.ant-typography {
        color: rgba(0,39,76, 0.85);
    }

    h2.ant-typography {
        color: rgba(0,39,76, 0.85);
    }

    h3.ant-typography {
        color: rgba(0,39,76, 0.85);
    }

    h4.ant-typography {
        color: rgba(0,39,76, 0.65);
    }

    .ant-btn {
        border: none;
        border-radius: 15px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024"/>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </Head>
            <NextSeo 
                title="MasterSeats"
                description="A marketplace for all student tickets!"
                openGraph={{
                    url: 'https://masterseats.com',
                    title: 'MasterSeats',
                    description: `A marketplace for all student tickets!`,
                    site_name: 'MasterSeats',
                  }}
                />
            <GlobalInjection/>
            <Component {...pageProps} />
        </>
    )
}

declare global {
    interface Window { analytics: any; }
}