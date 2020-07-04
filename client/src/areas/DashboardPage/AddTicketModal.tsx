import React, {useState} from 'react'
import {Modal, Form, Input, Row} from 'antd'
import {GenButton} from './DashboardPage.styled'
import {GameSelect} from '../../components/SelectOptions'
import {MichiganFootballGame} from '../../../model'

interface AddTicketModalProps {
    visible: boolean
    onCancel: () => void
}

const AddTicketModal: React.FC<AddTicketModalProps> = (props) => {
    const {visible, onCancel} = props
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [form] = Form.useForm()

    const onFinish = (user_info) => {
        console.table(user_info)
        onCancel()
        form.setFieldsValue({
            game: undefined,
            section: undefined,
            price: undefined
        })
    }

    return (
        <Modal
            title="Add a Ticket"
            visible={visible}
            onCancel={onCancel}
            footer={[]}
            >
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
                            <GameSelect value={gameValue} setValue={(e) => {
                                form.setFieldsValue({game: e})
                                setGameValue(e)
                            }}/>
                        </Form.Item>

                        <Form.Item
                            label="Section"
                            name="section"
                            rules={[{ required: true, message: 'Section is required' }]}
                        >
                            <Input type="section" placeholder="Section #"/>
                        </Form.Item>

                        <Form.Item
                            label="Listing Price"
                            name="price"
                            rules={[{ required: true, message: 'Listing Price is required' }]}
                        >
                            <Input type="section" placeholder="Price"/>
                        </Form.Item>


                        <Form.Item>
                            <Row justify="center">
                                <GenButton style={{fontFamily: 'Mark Pro'}} type="primary" htmlType="submit">
                                    Post Ticket
                                </GenButton>
                            </Row>
                        </Form.Item>
                    </Form>
        </Modal>
    )
}

export default AddTicketModal