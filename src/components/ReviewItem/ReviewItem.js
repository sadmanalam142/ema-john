import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product, clickRemove}) => {
    const { img, name, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-detail'>
                <div>
                    <h3 className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</h3>
                    <p>price: <span style={{ color: 'orange' }}>${price}</span></p>
                    <p><small>Shipping:{shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    <p></p>
                </div>
                <div className='delete-btn'>
                    <button onClick={() => clickRemove(product)} className='delete-icon'>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ReviewItem;