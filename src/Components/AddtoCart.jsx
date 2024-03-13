import React, { useState ,useEffect } from 'react';
import './AddtoCart.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AddtoCart({ data }) {
    const [quantities, setQuantities] = useState({});
    const navigate = useNavigate();
    const [totalAmount, setTotalAmount] = useState(0);
    Cookies.set('amount', totalAmount, { expires: 7 });

    const handleQuantityChange = (event, productId) => {
        const { value } = event.target;
        setQuantities(prevState => ({
            ...prevState,
            [productId]: parseInt(value)
        }));
    };

    const calculateTotalAmount = () => {
        let total = 0;
        data.forEach(item => {
            const quantity = quantities[item.id] || 0;
            total += item.price * quantity;
        });
        return total;
    };

    useEffect(() => {
        setTotalAmount(calculateTotalAmount());
    }, [data, quantities]);

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
                                    <select value={quantities[item.id] || 1} onChange={(event) => handleQuantityChange(event, item.id)}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </select>
                                </p>
                                <p>Total: ${item.price * (quantities[item.id] || 1)}</p>
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
