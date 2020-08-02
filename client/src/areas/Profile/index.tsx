import React, {useContext, useEffect, useState} from 'react'
import {PageDashboard} from '../Universal/PageUniversal'
import ResetForm from '../LoginCard/ResetForm'
import {UserContext} from '../../lib/UserContext'
import {message, Button, Card, Typography} from 'antd'
import OpenPage from '../../areas/Universal/OpenPage'
import Navbar from '../Universal/Navbar'
import {OuterContainer } from '../Universal/Card.styled'
import Page from '../../components/Page'
import BackgroundPolygons from '../../components/BackgroundPolygons'
import styled from 'styled-components'
import AutomaticPaymentForm from './AutomaticPaymentForm'

const Profile: React.FC = () => {
    const {api, setToken, currentUser} = useContext(UserContext)
    const [hasAutomaticPayouts, setHasAutomaticPayouts] = useState(false)
    
    useEffect(() => {
        if (currentUser !== null) {
            if (currentUser.seller_payment_id !== null) {
                setHasAutomaticPayouts(true)
            }
        }
    }, [currentUser])

    const resetPassword = async (body_change) => {
        if (body_change.new_password !== body_change.repeat_password) {
            message.error("Your new password is not the same as your repeated password.")
            return
        }

        try {
            await api.changePasswordFromProfile({new_password: body_change.new_password})
            message.success("Your password has been changed. Please login with your new password.")
        } catch (err) {
            message.error("There was a problem verifying your account. Please contact us.")
        }
    }

    const addHyperWalletData = async (values) => {
        await api.addHyperWalletData({
            dob: values.dob,
            address: values.address,
            city: values.city,
            state: values.state,
            country: values.country,
            zipcode: values.zipcode
        }).then(() => {
            setTimeout(async () => {
                const new_user = await api.getUser()
        
                if (new_user.data.seller_payment_id !== null) {
                    message.error("Something went wrong while trying to add you to automatic payouts. Please contact our support team for help.")
                } else {
                    setHasAutomaticPayouts(true)
                }
            }, 2000)
        })
    }

    return (
        <PageDashboard pageStyle={{marginTop: '-15px !important'}} cardStyle={{paddingLeft: '20%', paddingRight: '20%', paddingTop: 50}} isLoggedIn={currentUser === null ? false : true} selected={-1}>
            <Typography.Title style={{marginBottom: 45}}>Profile</Typography.Title>
            <ResetForm onFinish={resetPassword}/>
            {hasAutomaticPayouts ? 
                <Typography.Text>Congratulations! You signed up for automatic payouts. The next time a ticket is sold, you will get paid out immediately.</Typography.Text> : 
                <AutomaticPaymentForm onFinish={addHyperWalletData}/>
            }
        </PageDashboard>
    )
}

export default Profile