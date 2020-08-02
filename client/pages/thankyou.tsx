import React, {useContext, useState, useEffect} from 'react'
import {Button, Form, Input, Row, Radio, Card, message} from 'antd'
import Head from 'next/head'
import LoginBackground from '../src/components/LoginBackground'
import ForgotPasswordComponent from '../src/areas/LoginCard/ForgotPasswordComponent'
import {UserContext} from '../src/lib/UserContext'
import {useRouter} from 'next/router'
import ThankYouComponent from '../src/areas/ThankYou'

const ThankYou: React.FC = () => {
    const {currentUser} = useContext(UserContext) 
    const router = useRouter()
    const [message, setMessage] = useState('Thank you!')
    const [isEmail, setIsEmail] = useState(false)

    useEffect(() => {
        if (router.query.email !== undefined) {
            setIsEmail(true)
            setMessage('Thank you! We know email confirmations suck, but we do it for you to make sure everyone on the platform is a student. Please check your email for a confirmation link.')
        } else if (router.query.post !== undefined) {
            setMessage(`Thanks for listing your ticket for ${router.query.post}, ${currentUser.first_name}! We\'re looking for a buyer right now. We\'ll email you when we\'ve found the perfect buyer. Hang tight!`)
        } else if (router.query.purchase !== undefined) {
            setMessage(`Thanks for purchasing your ticket for ${router.query.purchase}, ${currentUser.first_name}! We\'re contacting the seller right now. We\'ll email you when the seller confirms that the ticket has been transferred. Hang tight!`)
        }
    }, [router.query])

    return (
        <>
            <Head>
                <title>MasterSeats • Thank You</title>
            </Head>
            <ThankYouComponent message={message} isEmail={isEmail} />
        </>
    );
};

export default ThankYou;