import {Card, Form, Input, Button, Row, Typography, Col, DatePicker } from 'antd'
import React, {useState, useContext} from 'react'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import Navbar from '../Universal/Navbar'
import {OuterContainer, CardContainer, ButtonLink, BottomText, CardButton} from '../Universal/Card.styled'
import Footer from '../Universal/Footer'
import MaskedInput from 'antd-mask-input'
import DropIn from "braintree-web-drop-in-react";
import styled from 'styled-components'

const ExternalContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

const InternalContainer = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
`

interface RegisterComponentProps {
    onFinish: (values) => void
    title: string
}

const RegisterComponent: React.FC<RegisterComponentProps> = (props) => {
    const {onFinish, title} = props

    return (
        <OuterContainer>
            <Navbar isLoggedIn={false} selected={2}/>
            <CardContainer>
                <MasterSeatsCard style={{maxWidth: 500}} withLink={true}>
                    <Form
                        hideRequiredMark={true}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="First Name"
                            name="first_name"
                            rules={[{ required: true, message: 'First Name is required' }]}
                        >
                            <Input placeholder="John"/>
                        </Form.Item>

                        <Form.Item
                            label="Last Name"
                            name="last_name"
                            rules={[{ required: true, message: 'Last Name is required' }]}
                        >
                            <Input placeholder="Smith"/>
                        </Form.Item>

                        <Form.Item
                            label="UMich Unique ID"
                            name="uniq_id"
                            rules={[{ required: true, message: 'Email is required' }]}
                        >
                            <Input placeholder="uniqid1234@umich.edu"/>
                        </Form.Item>

                        <Form.Item
                            label="New Password"
                            name="password"
                            rules={[{ required: true, message: 'Password is required' }]}
                        >
                            <Input type="password" placeholder="password1234"/>
                        </Form.Item>

                        <Form.Item
                            label="Repeat Password"
                            name="rep_password"
                            rules={[{ required: true, message: 'Password is required' }]}
                        >
                            <Input type="password" placeholder="password1234"/>
                        </Form.Item>
                        
                        <Form.Item>
                            <Row justify="center">
                                <CardButton type="primary" htmlType="submit">
                                    {title}
                                </CardButton>
                            </Row>
                        </Form.Item>
                    </Form>
                </MasterSeatsCard>
            </CardContainer>
            <Footer/>
        </OuterContainer>
    )
}

export default RegisterComponent