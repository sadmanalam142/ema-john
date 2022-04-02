import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = (total * 0.1).toFixed(2);
    const finalPrice = total + shipping + parseFloat(tax);

    let command;
    if (cart.length === 0) {
        command = <p style={{ color: 'red' }}>please add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p style={{ color: 'blue' }}> please add more items...</ p>
    }
    else {
        command = <p style={{ color: 'green' }}>thanks for adding items happy shopping <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon></p>
    }
    return (
        <div className='cart'>
            <div>
                {command}
            </div>
            <h3>Cart Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${finalPrice.toFixed(0)}</h5>
            <p>{props.children}</p>
        </div>
    );
};

export default Cart;