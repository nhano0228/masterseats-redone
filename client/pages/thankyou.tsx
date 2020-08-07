import React, {useContext, useState, useEffect} from 'react'
import Head from 'next/head'
import {UserContext} from '../src/lib/UserContext'
import {useRouter} from 'next/router'
import ThankYouComponent from '../src/areas/ThankYou'
import {seeIfLogin} from '../src/lib'
import Loading from '../src/components/Loading';

const ThankYou: React.FC = () => {
    const {currentUser, api, setToken} = useContext(UserContext) 
    const router = useRouter()
    const [message, setMessage] = useState('Thank you!')
    const [isEmail, setIsEmail] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (currentUser === undefined || currentUser === null) {
            setIsLoading(true)
            return
        }
        if (router.query.email !== undefined) {
            setIsEmail(true)
            setMessage('Thank you! We know email confirmations suck, but we do it for you –\nto make sure everyone on the platform is a student.\nPlease check your email for a confirmation link.')
        } else if (router.query.post !== undefined) {
            setMessage(`Thanks for listing your ticket for ${router.query.post}, ${currentUser.first_name}!\nWe\'re looking for a buyer right now.\nWe\'ll email you when we\'ve found the perfect buyer.\nHang tight!`)
        } else if (router.query.purchase !== undefined) {
            setMessage(`Thanks for purchasing your ticket for ${router.query.purchase}, ${currentUser.first_name}!\nWe\'re contacting the seller right now.\nWe\'ll email you when the seller confirms that the ticket has been transferred.\nHang tight!`)
        }
        setIsLoading(false)
    }, [router.query, currentUser])

    useEffect(() => {
        seeIfLogin(api, setToken)
    }, [])

    return (
        <>
            <Head>
                <title>MasterSeats • Thank You</title>
            </Head>
            {isLoading ? <Loading/> : <ThankYouComponent message={message} isEmail={isEmail} />}
            
        </>
    );
};

export default ThankYou;