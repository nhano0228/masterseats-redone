import React, { useContext } from 'react';
import {Modal, Button, message} from 'antd'
import { UserContext } from '../../lib/UserContext';
import DropIn from 'braintree-web-drop-in-react';
import Loading from '../../components/Loading';

interface PurchaseTicketModalProps {
    visible: boolean
    token: string
    onCancel: () => void
    onComplete: (nonce: string) => void
}

const PurchaseTicketModal: React.FC<PurchaseTicketModalProps> = props => {
    const {currentUser, api} = useContext(UserContext)
    var instance_drop;
    const {visible, token, onCancel, onComplete} = props
    const handlePurchase = async (event) => {
      const { nonce } = await instance_drop.requestPaymentMethod();
      onComplete(nonce)
    };

    return (
        <Modal
            title="Purchase Ticket"
            visible={visible}
            onCancel={onCancel}
            onOk={handlePurchase}
            >
              {token === '' ?  
                <Loading/> :
                <DropIn 
                  options={{authorization: token, venmo: true, paypal: true}}
                  onInstance={(instance) => (instance_drop = instance)}
                />
              }
              
        </Modal>
    );
};

export default PurchaseTicketModal;