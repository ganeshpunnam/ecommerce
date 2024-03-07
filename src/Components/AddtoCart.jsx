import React, { useState } from 'react';
import './AddtoCart.css';
import { useNavigate } from 'react-router-dom';

function AddtoCart({ data }) {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    return (
        <div>
            <button onClick={() => navigate("/Home")}>back</button>
            {Object.keys(data).length !== 0 ? (
                <div key={data.id} className="add-to-cart-item card">
                    <img src={data.image} alt={data.name} className="card-image" />
                    <div className="card-details">
                        <h3 className="card-title">{data.name}</h3>
                        <p className="card-description">{data.description}</p>
                        <p className="card-price">${data.price * quantity}</p>
                        <div className='selects'>
                            <p>Quantity
                                <select value={quantity} onChange={handleQuantityChange}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </p>
                            <button className="add-to-cart-btn">Check out</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default AddtoCart;
