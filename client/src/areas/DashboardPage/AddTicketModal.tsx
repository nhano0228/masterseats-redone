import React, {useState} from 'react'
import {Modal, Form, Input, Row} from 'antd'
import {GenButton} from './DashboardPage.styled'
import {GameSelect, SectionSelect} from '../../components/SelectOptions'
import {MichiganFootballGame, PostTicketBody} from '../../../api'
import SellingForm from '../SellingPage/SellingForm'

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