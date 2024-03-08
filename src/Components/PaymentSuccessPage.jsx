import React from 'react';
import './PaymentSuccessPage.css';
import { useNavigate } from 'react-router-dom';

function PaymentSuccessPage() {
    const navigate =useNavigate();
    return (
        <div className="payment-success-container">
            <div className="payment-success-card">
                <h2 className="payment-success-title">Payment Successful!</h2>
                <p className="payment-success-message">Thank you for your payment.</p>
                <div className='su'>
                <img src="https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png" alt="Success Icon" className="payment-success-icon" />
                <button className="payment-success-btn" onClick={()=> navigate('/Home')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccessPage;
