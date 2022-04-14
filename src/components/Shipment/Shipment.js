import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleName = event => {
        setName(event.target.value);
    }
    const handleAddress = event => {
        setAddress(event.target.value);
    }
    const handlePhone = event => {
        setPhone(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email">Email</label>
                    <input value={user?.email} readOnly type="email" name="Email" id="" />
                    <label htmlFor="Name">Your Name</label>
                    <input onBlur={handleName} type="text" name="name" id="" />
                    <label htmlFor="Address">Your Adress</label>
                    <input onBlur={handleAddress} type="Address" name="Address" id="" />
                    <label htmlFor="Phone">Phone Number</label>
                    <input onBlur={handlePhone} type="phone" name="Phone" id="" />
                    <p style={{ color: 'red' }}>{error}</p>
                    <br />
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;