import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../customHooks/CartDetail/CartDetail';
import useProducts from '../../customHooks/ProductsDetail/ProductsDetail';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const clickRemove = (product) => {
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className='review-item-container'>
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product ={product}
                clickRemove={clickRemove}
                ></ReviewItem>)
            }
            </div>
            <div className='item-cart'>
                <Cart cart={cart}>
                    <Link to='/inventory'>
                        <button>Procced Payment</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;