import React, { useState ,useEffect } from 'react';
import './AddtoCart.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddtoCart({ data }) {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [totalAmount, setTotalAmount] = useState(0);
    Cookies.set('amount', totalAmount, { expires: 7 });

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    const calculateTotalAmount = () => {
        let total = 0;
        data.forEach(item => {
            total += item.price * quantity;
        });
        return total;
    };

  
    useEffect(() => {
        setTotalAmount(calculateTotalAmount());
    }, [data, quantity]);

    return (
        <div>
            <button onClick={() => navigate("/Home")}>back</button>
            {data.length!== 0 ? (
                data.map(item =>(
                    <div key={item.id} className="add-to-cart-item card">
                        <img src={item.image} alt={item.name} className="card-image" />
                        <div className="card-details">
                            <h3 className="card-title">{item.name}</h3>
                            <p className="card-description">{item.description}</p>
                            <p className="card-price">Price:${item.price}</p>
                            <div className='selects'>
                                <p>
                                    Quantity
                                    <select value={quantity} onChange={handleQuantityChange}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </p>
                                <p>Total: ${item.price * quantity}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Your cart is empty</p>
            )}
            <p>Total Amount : ${totalAmount}</p>
            <button className="add-to-cart-btn" onClick={()=> navigate('/CheckoutForm')}>Check out</button>
        </div>
    );
}

export default AddtoCart;
