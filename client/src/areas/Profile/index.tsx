import React, {useContext} from 'react'
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

const Profile: React.FC = () => {
    const {api, setToken} = useContext(UserContext)
    
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

    return (
        <OuterContainer>
            <Navbar isDashboard={true} isLoggedIn={true} selected={1}/>
            <BackgroundPolygons/>
            <Page>
                <Card bodyStyle={{marginBottom: 50, padding: 60, flexDirection: 'column', display: 'flex', alignItems: 'center'}}>
                    <Typography.Title style={{marginBottom: 45}}>Profile</Typography.Title>
                    <ResetForm onFinish={resetPassword}/>
                    <Button onClick={async () => {
                        localStorage.setItem('email', '')
                        localStorage.setItem('password', '')
                        await setToken(null)
                        OpenPage('/')
                    }}>Log out</Button>
                </Card>
            </Page>
        </OuterContainer>
    )
}

export default Profile