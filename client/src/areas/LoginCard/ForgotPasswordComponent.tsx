import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../OpenPage'
import Navbar from '../Navbar'
import {OuterContainer, CardButton, CardContainer} from './Card.styled'

const TextContainer = styled(Typography.Text)`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 56px;
    font-family: 'Mark Pro';
    padding-right: 25px;
    padding-left: 25px;
`

interface LoginComponentProps {
    onFinish: (values) => void
}

const ForgotPasswordComponent: React.FC<LoginComponentProps> = (props) => {
    const {onFinish} = props

    const onClick = () => {
        OpenPage('/signup')
    }

    return (
        <OuterContainer>
            <Navbar selected={1}/>
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