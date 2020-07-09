import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import React, {useState, useContext} from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../OpenPage'
import Navbar from '../Navbar'
import {OuterContainer, CardContainer, ButtonLink, BottomText, CardButton} from '../Card.styled'
import Footer from '../Footer'

interface LoginComponentProps {
    onFinish: (values) => void
    title: string
}

const LoginComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish, title} = props

    return (
        <OuterContainer>
            <Navbar isLoggedIn={false} selected={1}/>
            <CardContainer>
                <MasterSeatsCard style={{maxWidth: 450}} withLink={true}>
                    <Form
                        hideRequiredMark={true}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Email is required' }]}
                        >
                            <Input placeholder="Email"/>
                        </Form.Item>

                        <Form.Item
                            style={{marginBottom: 0}}
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Password is required' }]}
                        >
                            <Input type="password" placeholder="Password"/>
                        </Form.Item>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
                            <Button style={{fontFamily: 'Mark Pro',
                                        color: "#000000",
                                        opacity: "0.5",
                                        textAlign: "right",
                                        fontSize: "12px",
                                        padding: "0"
                                    }} 
                                    onClick={() => {OpenPage('/forgotpassword')}} 
                                    type="link">                    
                                    Forgot Password.
                            </Button>
                        </div>

                        <Form.Item>
                            <Row justify="center">
                                <CardButton type="primary" htmlType="submit">
                                    {title}
                                </CardButton>
                            </Row>
                        </Form.Item>
                    </Form>
                </MasterSeatsCard>
                <BottomText>
                    Don't have an account? <ButtonLink onClick={() => OpenPage('/register')} type="link">Sign Up.</ButtonLink>
                </BottomText>
            </CardContainer>
            <Footer/>
        </OuterContainer>
    )
}

export default LoginComponent