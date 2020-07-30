import React, { useContext } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {Modal, Button, message} from 'antd'
import { UserContext } from '../../lib/UserContext';
import DropIn from 'braintree-web-drop-in-react';
import Loading from '../../components/Loading';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: `"Mark Pro Bold", "Helvetica Neue", Helvetica, sans-serif`,
      fontSize: "16px",
      fontWeight: '800',
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

interface StripeCardProps {
    visible: boolean
    token: string
    onCancel: () => void
    onComplete: (nonce: string) => void
}

const StripeCardModal: React.FC<StripeCardProps> = props => {
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

export default StripeCardModal;