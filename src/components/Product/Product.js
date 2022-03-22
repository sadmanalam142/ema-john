import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {img, name, price, seller, ratings} = props.product;
    return (
        <div className='items'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <div className='p-detail'>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
            </div>
            <div>
                <button onClick={() => props.handleAddToCart(props.product)} className='items-btn'>
                    <p className='item-btn'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Product;