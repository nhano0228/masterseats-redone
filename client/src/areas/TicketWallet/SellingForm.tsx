import React, {useState, useEffect} from 'react'
import {Modal, Form, Input, Row, InputNumber} from 'antd'
import {GenButton} from '../DashboardPage/DashboardPage.styled'
import {GameSelect, SectionSelect} from '../../components/SelectOptions'
import {MichiganFootballGame, PostTicketBody} from '../../../api'
import {MaskedInput} from 'antd-mask-input'

interface SellingFormProps {
    onCancel?: () => void
    postTicket: (ticketBody: PostTicketBody) => void
    showVenmo: boolean
}

const SellingForm: React.FC<SellingFormProps> = props => {
    const {onCancel, postTicket, showVenmo} = props
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [sectionValue, setSectionValue] = useState<number>(undefined)
    const [form] = Form.useForm()

    useEffect(() => {
        if (localStorage.getItem('game') !== undefined && localStorage.getItem('game') !== '') {
            form.setFieldsValue({
                game: localStorage.getItem('game'),
                section: parseInt(localStorage.getItem('section')),
                price: parseFloat(localStorage.getItem('price'))
            })
        }
    }, [])

    const onFinish = async (user_info) => {
        await postTicket(user_info)
        typeof onCancel === 'function' && onCancel()
        form.setFieldsValue({
            game: undefined,
            section: undefined,
            price: undefined
        })
    }

    return (
        <Form
            form={form}
            hideRequiredMark={true}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
                <Form.Item
                    label="Game"
                    name="game"
                    rules={[{ required: true, message: 'The game is required' }]}
                >
                    <GameSelect 
                        hasAllGames={false}
                        value={gameValue} 
                        setValue={(e) => {
                            form.setFieldsValue({game: e})
                            setGameValue(e)
                        }}/>
                </Form.Item>

                <Form.Item
                    label="Listing Price"
                    name="price"
                    rules={[{ required: true, message: 'Listing Price is required' }]}
                >
                    <InputNumber type="number" placeholder="25.00"/>
                </Form.Item>

                <Form.Item
                    label="Section"
                    name="section"
                    rules={[{ required: true, message: 'Section is required' }]}
                >
                    <SectionSelect 
                        value={sectionValue} 
                        setValue={(e) => {
                            form.setFieldsValue({section: e})
                            setSectionValue(e)
                        }}/>
                </Form.Item>

                {showVenmo ? 
                    <Form.Item
                        label="Venmo (Phone Number)"
                        name="venmo_phone"
                        rules={[{ required: true, message: 'Phone Number is required' }]}
                    >
                        <MaskedInput mask="111-111-1111" placeholder="555-555-5555"/>
                    </Form.Item>
                : null }
                

                <Form.Item>
                    <Row justify="center">
                        <GenButton style={{fontFamily: 'Mark Pro'}} type="primary" htmlType="submit">
                            Post Ticket
                        </GenButton>
                    </Row>
                </Form.Item>
            </Form>
    )
}

export default SellingForm