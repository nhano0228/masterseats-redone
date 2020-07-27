import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../Universal/OpenPage'
import Navbar from '../Universal/Navbar'
import {OuterContainer, CardButton, CardContainer} from '../Universal/Card.styled'
import {TextContainer} from './'

interface LoginComponentProps {
    onFinish: (values) => void
}

const ForgotPasswordComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish} = props

    return (
        <OuterContainer>
            <Navbar isLoggedIn={true} selected={1}/>
            <CardContainer>
                <MasterSeatsCard withLink={true} style={{width: '70vh'}}>
                    <Form
                        hideRequiredMark={true}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <TextContainer>
                            <Typography.Text>We'll send a link to reset your</Typography.Text>
                            <Typography.Text>password for your account</Typography.Text>
                        </TextContainer>
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Email is required' }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item>
                            <Row justify="center">
                                <CardButton type="primary" htmlType="submit">
                                    Reset
                                </CardButton>
                            </Row>
                        </Form.Item>
                    </Form>
                </MasterSeatsCard>
            </CardContainer>
        </OuterContainer>
    )
}

export default ForgotPasswordComponent