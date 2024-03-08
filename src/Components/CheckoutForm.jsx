import React, { useState } from 'react';
import './CheckoutForm.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

function CheckoutForm() {
    const navigate = useNavigate();
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
        phoneNumber: ''
    });

    const handleAddressChange = (event) => {
        setAddress({
            ...address,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // onSubmit(address);
        alert("Address Added 👍")
      console.log(address);
      navigate('/PaymentPage')
    
    };

    return (
        <div className="checkout-form">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Street Address:
                    <input type="text" name="street" value={address.street} onChange={handleAddressChange} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" value={address.city} onChange={handleAddressChange} />
                </label>
                <label>
                    State:
                    <input type="text" name="state" value={address.state} onChange={handleAddressChange} />
                </label>
                <label>
                    ZIP Code:
                    <input type="text" name="zip" value={address.zip} onChange={handleAddressChange} />
                </label>
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={address.phoneNumber} onChange={handleAddressChange} />
                </label>
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CheckoutForm;
