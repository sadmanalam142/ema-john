import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleAddToCart = products => {
        console.log(products);
        const newCart = [...cart, products];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="item-container">
             {
              products.map(product => <Product
                 key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}
                 ></Product>)
             }
            </div>
            <div className="iten-cart">
                <h3>Cart Summary</h3>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;