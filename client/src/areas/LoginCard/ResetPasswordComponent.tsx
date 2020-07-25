import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../OpenPage'
import Navbar from '../Navbar'
import {OuterContainer, CardButton, CardContainer} from '../Card.styled'
import ResetForm from './ResetForm'
import {TextContainer} from './'

interface LoginComponentProps {
    onFinish: (values) => void
}

const ResetPasswordComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish} = props

    return (
        <OuterContainer>
            <CardContainer>
                <MasterSeatsCard withLink={false} style={{width: '70vh'}}>
                    <TextContainer>
                        <Typography.Text>Let's reset your password.</Typography.Text>
                    </TextContainer>
                    <ResetForm onFinish={onFinish}/>
                </MasterSeatsCard>
            </CardContainer>
        </OuterContainer>
    )
}

export default ResetPasswordComponent