import React, { useContext } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {Modal, Button, message} from 'antd'
import { UserContext } from '../../lib/UserContext';

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
    payment_intent: string
    onCancel: () => void
    onComplete: () => void
}

const StripeCardModal: React.FC<StripeCardProps> = props => {
    const {currentUser} = useContext(UserContext)
    const {visible, payment_intent, onCancel, onComplete} = props
    const stripe = useStripe();
    const elements = useElements();

    const handlePurchase = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }
    
        const result = await stripe.confirmCardPayment(payment_intent, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: currentUser.first_name + " " + currentUser.last_name,
            },
          }
        });
    
        if (result.error) {
            message.error(result.error.message)
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            onComplete()
          } else {
              console.log("status: " + result.paymentIntent.status)
          }
        }
      };

    return (
        <Modal
            title="Purchase Ticket"
            visible={visible}
            onCancel={onCancel}
            footer={[
                <Button disabled={!stripe} onClick={handlePurchase}>Confirm Ticket</Button>
            ]}
            >
            <CardElement options={CARD_ELEMENT_OPTIONS} />
        </Modal>
    );
};

export default StripeCardModal;