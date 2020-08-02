import React, {useContext, useState, useEffect} from 'react'
import {Spin} from 'antd'
import Head from 'next/head'
import TicketWallet from '../src/areas/TicketWallet'
import { UserContext } from '../src/lib/UserContext';
import {seeIfLogin} from '../src/lib'
import OpenPage from '../src/areas/Universal/OpenPage'
import styled from 'styled-components'
import Loading from '../src/components/Loading';
import {useRouter} from 'next/router'

const Selling: React.FC = () => {
    const { api, setToken } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [defaultValue, setDefaultValue] = useState("1")
    const [openModal, setOpenModal] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (router.query.pending !== undefined) {
            setDefaultValue("2")
        } else if (router.query.completed !== undefined) {
            setDefaultValue("3")
        } else if (router.query.fromverify !== undefined) {
            setOpenModal(true)
        }
    }, [router.query])

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
            {isLoading ? <Loading/> : <TicketWallet defaultValue={defaultValue} setOpenModal={(visible) => setOpenModal(visible)} openModal={openModal}/>}
        </>
    );
};

export default Selling;