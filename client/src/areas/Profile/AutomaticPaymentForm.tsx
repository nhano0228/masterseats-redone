import {Card, Form, Input, Button, Row, Typography, Col, DatePicker } from 'antd'
import React, {useState, useContext} from 'react'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import Navbar from '../Universal/Navbar'
import {OuterContainer, CardContainer, ButtonLink, BottomText, CardButton} from '../Universal/Card.styled'
import Footer from '../Universal/Footer'
import MaskedInput from 'antd-mask-input'
import DropIn from "braintree-web-drop-in-react";
import styled from 'styled-components'

const InternalContainer = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
`

interface AutomaticPaymentProps {
    onFinish: (values) => void
}

const AutomaticPaymentForm: React.FC<AutomaticPaymentProps> = (props) => {
    const {onFinish} = props

    return (
        <InternalContainer>
                <Form
                    hideRequiredMark={true}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Date of Birth"
                        name="dob"
                        rules={[{ required: true, message: 'Date of Birth is required' }]}
                    >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: 'Address is required' }]}
                    >
                        <Input placeholder="555 South University Avenue"/>
                    </Form.Item>

                    <Form.Item
                        label="City"
                        name="city"
                        rules={[{ required: true, message: 'City is required' }]}
                    >
                        <Input placeholder="Ann Arbor"/>
                    </Form.Item>

                    <Form.Item
                        label="State"
                        name="state"
                        rules={[{ required: true, message: 'State is required' }]}
                    >
                        <Input maxLength={2} placeholder="MI"/>
                    </Form.Item>

                    <Form.Item
                        style={{marginBottom: 0}}
                        label="Zip Code"
                        name="zipcode"
                        rules={[{ required: true, message: 'Zip Code is required' }]}
                    >
                        <Input placeholder="10000"/>
                    </Form.Item>
                    <Form.Item>
                        <Row justify="center">
                            <CardButton type="primary" htmlType="submit">
                                Get Automatic Payments
                            </CardButton>
                        </Row>
                    </Form.Item>
                </Form>
        </InternalContainer>
    )
}

export default AutomaticPaymentForm