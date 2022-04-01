import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link className='links' to="/shop">Shop</Link>
                <Link className='links' to="/orders">Orders</Link>
                <Link className='links' to="/inventory">Inventory</Link>
                <Link className='links' to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;