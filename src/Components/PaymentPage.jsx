import React, { useState } from 'react';
import './PaymentPage.css';
import Cookies from 'js-cookie';
import { useNavigate  } from 'react-router-dom';

function PaymentPage() {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const amountData = Cookies.get('amount');

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic for handling form submission (e.g., payment processing)
        alert('Payment Done');
        navigate('/PaymentSuccessPage')
    
    };

    return (
        <div className="payment-page">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit} className="payment-form">
                <label>
                    Card Number:
                    <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
                </label>
                <label>
                    Expiry Date:
                    <input type="text" value={expiryDate} onChange={handleExpiryDateChange} />
                </label>
                <label>
                    CVV:
                    <input type="text" value={cvv} onChange={handleCvvChange} />
                </label>
                <button type="submit">Pay ${amountData}</button>
            </form>
        </div>
    );
}

export default PaymentPage;
