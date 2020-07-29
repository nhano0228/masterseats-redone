import React, {useState, useEffect} from 'react'
import {Modal, Form, Input, Row} from 'antd'
import {GenButton} from '../DashboardPage/DashboardPage.styled'
import {GameSelect, SectionSelect} from '../../components/SelectOptions'
import {MichiganFootballGame, PostTicketBody} from '../../../api'

interface SellingFormProps {
    onCancel?: () => void
    postTicket: (ticketBody: PostTicketBody) => void
}

const SellingForm: React.FC<SellingFormProps> = props => {
    const {onCancel, postTicket} = props
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [sectionValue, setSectionValue] = useState<number>(undefined)
    const [form] = Form.useForm()

    useEffect(() => {
        if (localStorage.getItem('game') !== undefined) {
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
                    <Input type="section" placeholder="25" prefix={"$"}/>
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