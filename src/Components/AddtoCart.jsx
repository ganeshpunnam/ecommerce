import React from 'react';
import './AddtoCart.css';
import { useNavigate } from 'react-router-dom';

function AddtoCart({ data }) {
    console.log(data);
    const navigate=useNavigate()

    return (
        <div>
            <button onClick={()=> navigate("/Home")}>back</button>
            <div key={data.id} className="add-to-cart-item card">
                <img src={data.image} alt={data.name} className="card-image" />
                <div className="card-details">
                    <h3 className="card-title">{data.name}</h3>
                    <p className="card-description">{data.description}</p>
                    <p className="card-price">${data.price}</p>
                    <button className="add-to-cart-btn">Check out</button>
                </div>
            </div>
        </div>
    );
}

export default AddtoCart;
