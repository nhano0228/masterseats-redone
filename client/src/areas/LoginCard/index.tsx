import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import {UserOutlined, LockOutlined} from '@ant-design/icons'
import React, {useState, useContext} from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../OpenPage'
import Navbar from '../../components/Navbar'

const OuterContainer = styled.div`
    width: 100%;
    height: 100vh;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    align-items: center;
    justify-content: center;
`

interface LoginComponentProps {
    onFinish: (values) => void
    title: string
}

const BottomText = styled(Typography.Text)`
    font-family: 'Mark Pro';
    font-weight: 500;
    text-align: center;
    padding-top: 10px;
    align-items: center;
    display: flex;
    flex-direction: row;
`

const ButtonLink = styled(Button)`
    padding: 0;
    font-weight: bold;
    margin-left: 4px;
    padding: 0px !important;
`

const LoginComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish, title} = props

    return (
        <OuterContainer>
            <Navbar selected={1}/>
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
                                <Button style={{width: '60%', marginTop: 60}} type="primary" htmlType="submit">
                                    {title}
                                </Button>
                            </Row>
                        </Form.Item>
                    </Form>
                </MasterSeatsCard>
                <BottomText>
                    Don't have an account? <ButtonLink onClick={() => OpenPage('/register')} type="link">Sign Up.</ButtonLink>
                </BottomText>
            </CardContainer>
        </OuterContainer>
    )
}

export default LoginComponent