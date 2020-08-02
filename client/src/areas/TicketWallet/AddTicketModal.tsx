import React from 'react'
import {Modal} from 'antd'
import {PostTicketBody} from '../../../api'
import SellingForm from './SellingForm'

interface AddTicketModalProps {
    visible: boolean
    onCancel: () => void
    postTicket: (ticketBody: PostTicketBody) => void
}

const AddTicketModal: React.FC<AddTicketModalProps> = (props) => {
    const {visible, onCancel, postTicket} = props
    
    return (
        <Modal
            title="Add a Ticket"
            visible={visible}
            onCancel={onCancel}
            footer={[]}
            >
                <SellingForm onCancel={onCancel} postTicket={postTicket}/>
        </Modal>
    )
}

export default AddTicketModal