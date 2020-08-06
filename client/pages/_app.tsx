import React, {useEffect} from 'react'
import Head from 'next/head'
import '../assets/theme.less'
import {createGlobalStyle} from 'styled-components'
import { NextSeo } from 'next-seo';
import media from 'styled-media-query'
import UserProvider from '../src/lib/UserContext'
import {resetSellingForm} from '../src/lib'

const GlobalInjection = createGlobalStyle`
    .ant-table-cell {
        font-family: 'Mark Pro Bold';
    }

    .ant-table {
        background: rgba(0,0,0,0);
        color: #000;
    }

    .ant-table tbody > tr > th {
        border-bottom: 0px solid #DAE2EF;
    }

    tbody {
        background: rgba(0,0,0,0);
    }
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

    .ant-carousel .slick-dots li button {
        background: rgb(0,39,76);
    }

    .ant-carousel .slick-dots li.slick-active button {
        background: rgb(0,39,76);
    }

    .ant-btn {
        font-family: 'Mark Pro Medium';
        border: none;
        border-radius: 15px;
        padding: 15px;
        padding-left: 20px;
        padding-right: 20px;
        height: auto !important;
        display: inline-block;
        margin-left:auto;
        margin-right:auto;

        ${media.lessThan("small")`
            padding-top: 12px !important;
            padding-bottom: 12px !important;
        `}
    }

    .ant-card-head {
        display: -webkit-flex;
        justify-content: center;
        padding-top: 16px;
        padding-bottom: 18px;
        border-bottom-width: 0px;
    }

    .ant-form-item-has-error .ant-input:focus {
        box-shadow: none;
    }

    .ant-form-item-label {
        font-family: 'Mark Pro';
        font-weight: bold;
        opacity: 0.8;
    }

    .ant-input {
        font-family: 'Mark Pro';
        border: none;
        background-color: rgba(0,0,0,0) !important;
        color: #000;
        padding: 2px 11px;
        border-bottom: 1px solid #DAE2EF;

        &:focus {
            box-shadow: none;
        }
    }

    .ant-tabs-top > .ant-tabs-nav::before {
        border-bottom: 0px;
    }

    .ant-tabs-large > .ant-tabs-nav .ant-tabs-tab {
        font-size: 20px;
    }

    .ant-dropdown-menu-item:hover, .ant-dropdown-menu-submenu-title:hover {
        background-color: #fff;
    }

    .ant-input-number-handler-wrap { 
        visibility: hidden;
    }
`

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/favicon.png" />
                <script dangerouslySetInnerHTML={{__html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                        (function(){
                        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                        s1.async=true;
                        s1.src='https://embed.tawk.to/5f270d734f3c7f1c910daa5e/default';
                        s1.charset='UTF-8';
                        s1.setAttribute('crossorigin','*');
                        s0.parentNode.insertBefore(s1,s0);
                        })();`}}/>
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
            <UserProvider>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}

declare global {
    interface Window { analytics: any; }
}