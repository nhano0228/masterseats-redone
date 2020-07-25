import {Card, Form, Input, Button, Row, Typography, Col } from 'antd'
import React, {useState} from 'react'
import styled from 'styled-components'
import MasterSeatsCard from '../../components/MasterSeatsCard'
import OpenPage from '../OpenPage'
import Navbar from '../Navbar'
import {OuterContainer, CardButton, CardContainer} from '../Card.styled'
import {TextContainer} from './'

interface ResetFormProps {
    onFinish: (values) => void
}

const ResetForm: React.FC<ResetFormProps> = props => {
    const {onFinish} = props
    return (
        <Form
            hideRequiredMark={true}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                label="New Password"
                name="new_password"
                rules={[{ required: true, message: 'New Password is required' }]}
            >
                <Input placeholder="password1234"/>
            </Form.Item>
            <Form.Item
                label="Repeat Password"
                name="repeat_password"
                rules={[{ required: true, message: 'Repeat New Password is required' }]}
            >
                <Input placeholder="password1234"/>
            </Form.Item>

            <Form.Item>
                <Row justify="center">
                    <CardButton type="primary" htmlType="submit">
                        Reset
                    </CardButton>
                </Row>
            </Form.Item>
        </Form>
    )
}

export default ResetForm