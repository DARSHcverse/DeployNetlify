import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


function PaymentForm() {
  const [cardholderName, setCardholderName] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.error(error.message);
    } else {
      console.log('Token:', token);
    }
  };

  return (
    <div className="payment-form">
      <h2>Payment Information</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label htmlFor="cardholderName">Cardholder Name</label>
          <input
            type="text"
            id="cardholderName"
            value={cardholderName}
            onChange={(e) => setCardholderName(e.target.value)}
            placeholder="Enter cardholder name"
            required
          />
        </div>
        <div className="form-group">
          <label>Card Details</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                },
              },
            }}
          />
        </div>
        <button type="submit" className='sub'>Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
