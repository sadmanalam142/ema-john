import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswrd, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPasswrd) {
            setError('password should be matched')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleCreateUser}>
                    <label htmlFor="Email">Email</label>
                    <input onBlur={handleEmail} type="email" name="Email" id="" />
                    <label htmlFor="Password">Password</label>
                    <input onBlur={handlePassword} type="password" name="Password" id="" />
                    <label htmlFor="Confirm-Password">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name="Confirm-Password" id="" />
                    <p style={{ color: 'red' }}>{error}</p>
                    <br />
                    <input className='submit-btn' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;