// Body.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Body.css';
import { useNavigate } from 'react-router-dom';

const Body = ({ getdata,  productsData1,addToCartProduct }) => {
    const navigate = useNavigate();
   
    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const filterData = productsData1.filter(product =>
        product.name.toLowerCase().includes(getdata.toLowerCase())
    );

    const dataToShow = getdata === '' ? productsData1 : filterData;
    
    const handleAddToCart = (product) => {
        addToCartProduct(product);
        alert("Item added to cart");
    };
    


    

    return (
        <div className="body">
            <h2 className="section-title">Featured Products</h2>
            <div className="carousel-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://images.pexels.com/photos/1425174/pexels-photo-1425174.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 1" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/108370/pexels-photo-108370.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 2" />
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/675439/pexels-photo-675439.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carousel Image 3" />
                    </div>
                </Slider>
            </div>
            <h2 className="section-title">All Products</h2>
            <button onClick={() => navigate('/Home2')}>Go to Home2</button>
            <div className="card-container">
                {dataToShow.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.name} className="card-image" />
                        <div className="card-details">
                            <h3 className="card-title">{product.name}</h3>
                            <p className="card-description">{product.description}</p>
                            <p className="card-price">${product.price}</p>
                         
                            <button className="add-to-cart-btn" onClick={handleAddToCart} >Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Body;
