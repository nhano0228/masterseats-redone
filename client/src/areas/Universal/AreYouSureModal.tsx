import React, { useContext } from 'react';
import {Modal, Button, Typography} from 'antd'
import { UserContext } from '../../lib/UserContext';
import DropIn from 'braintree-web-drop-in-react';
import Loading from '../../components/Loading';

interface AreYouSureModalProps {
    title: string
    visible: boolean
    onComplete: () => void
    onCancel: () => void
}

const AreYouSureModal: React.FC<AreYouSureModalProps> = props => {
    const { title, visible, onCancel, onComplete} = props
    return (
        <Modal
            title={title}
            visible={visible}
            onCancel={onCancel}
            onOk={onComplete}
            > 
            <Typography.Text>This is an irreversible action. You may not go back once this action is made.</Typography.Text>
        </Modal>
    );
};

export default AreYouSureModal;