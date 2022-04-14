import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const navigate = useNavigate();

      if(user){
          navigate('/shop');
      }
      let manageError;
      if (error) {
        manageError = error.message;
      }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Email">Email</label>
                    <input onBlur={handleEmail} type="email" name="Email" id="" />
                    <label htmlFor="Password">Password</label>
                    <input onBlur={handlePassword} type="password" name="Password" id="" />
                    <br />
                    <p style={{color: 'red'}}>{manageError}</p>
                    <input className='submit-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;