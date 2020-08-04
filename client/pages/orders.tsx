import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import { UserContext } from '../src/lib/UserContext';
import {seeIfLogin} from '../src/lib'
import Loading from '../src/components/Loading';
import {useRouter} from 'next/router'
import OrdersPage from '../src/areas/OrdersPage'

const Orders: React.FC = () => {
    const { api, setToken } = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(true)
    const [orders, setOrders] = useState(null)
    const router = useRouter()

    useEffect(() => {
        seeIfLogin(api, setToken).then(() => {
            setIsLoading(false)
        })
    }, [])

    const getOrders = async () => {
        const orders = await api.getOrders()
        setOrders(orders.data)
    }

    const confirmTransferBuyer = async (ticket_id: string) => {
        await api.transferredTicketBuyerConfirmation({ticket_id})
        await getOrders()
    }

    const refundTicket = async (ticket_id: string) => {
        await api.refundTicket({id: ticket_id})
        await getOrders()
    }

    return (
        <>
            <Head>
                <title>MasterSeats • Orders</title>
            </Head>
            {isLoading ? <Loading/> : 
                <OrdersPage 
                    orders={orders} 
                    getOrders={getOrders}
                    confirmTransferBuyer={confirmTransferBuyer}
                    refundTicket={refundTicket}
                    />
            }
        </>
    );
};

export default Orders;