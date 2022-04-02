import { Link } from 'react-router-dom';
import useCart from '../../customHooks/CartDetail/CartDetail';
import useProducts from '../../customHooks/ProductsDetail/ProductsDetail';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = selectedProduct => {
        let newCart = [];
        const exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = selectedProduct.quantity + 1;
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
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
            <div className="item-cart">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        {cart.length >= 2 && <button>Review Order</button>}
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;