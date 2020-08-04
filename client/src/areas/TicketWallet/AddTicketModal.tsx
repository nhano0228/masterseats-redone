import React, { useContext, useEffect, useState } from 'react'
import {Modal} from 'antd'
import {PostTicketBody} from '../../../api'
import SellingForm from './SellingForm'
import { UserContext } from '../../lib/UserContext'

interface AddTicketModalProps {
    visible: boolean
    onCancel: () => void
    postTicket: (ticketBody: PostTicketBody) => void
}

const AddTicketModal: React.FC<AddTicketModalProps> = (props) => {
    const {currentUser} = useContext(UserContext)
    const {visible, onCancel, postTicket} = props
    const [showVenmo, setShowVenmo] = useState(false)

    useEffect(() => {
        console.log(currentUser)
        if (currentUser !== undefined) {
            if (currentUser.venmo_phone === undefined || currentUser.venmo_phone === null) {
                setShowVenmo(true)
            }
        }
    }, [currentUser])

    return (
        <Modal
            title="Add a Ticket"
            visible={visible}
            onCancel={onCancel}
            footer={[]}
            >
                <SellingForm onCancel={onCancel} postTicket={postTicket} showVenmo={showVenmo} />
        </Modal>
    )
}

export default AddTicketModal