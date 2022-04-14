import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link className='links' to="/shop">Shop</Link>
                <Link className='links' to="/orders">Orders</Link>
                <Link className='links' to="/inventory">Inventory</Link>
                <Link className='links' to="/about">About</Link>
                {
                    user ?
                    <button onClick={handleSignOut}className='sign-out-btn'>Singout</button>
                    :
                    <Link className='links' to="/login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;