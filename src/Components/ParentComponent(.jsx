// ParentComponent.js

import React, { useState } from 'react';
import AddToCart from './AddtoCart';
import Body from './Body'; // Import the Body component

function ParentComponent() {
    const [cart, setCart] = useState([]);

    // Function to add item to cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <div>
            {/* Pass cart state and addToCart function to Body component */}
            <Body addToCartProduct={addToCart} />
            {/* Pass cart state to AddToCart component */}
            <AddToCart cart={cart} />
        </div>
    );
}

export default ParentComponent;
