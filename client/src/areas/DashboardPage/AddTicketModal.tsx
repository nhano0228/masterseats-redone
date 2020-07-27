import React, {useState} from 'react'
import {Modal, Form, Input, Row} from 'antd'
import {GenButton} from './DashboardPage.styled'
import {GameSelect, SectionSelect} from '../../components/SelectOptions'
import {MichiganFootballGame, PostTicketBody} from '../../../api'

interface AddTicketModalProps {
    visible: boolean
    onCancel: () => void
    postTicket: (ticketBody: PostTicketBody) => void
}

const AddTicketModal: React.FC<AddTicketModalProps> = (props) => {
    const {visible, onCancel, postTicket} = props
    const [gameValue, setGameValue] = useState<MichiganFootballGame>(undefined)
    const [sectionValue, setSectionValue] = useState<number>(undefined)
    const [form] = Form.useForm()


    const onFinish = async (user_info) => {
        await postTicket(user_info)
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
        </Modal>
    )
}

export default AddTicketModal