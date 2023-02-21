import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';

import './login.css'

const Login = () => {

    const email = useRef();
    const password = useRef();

    const { user, isFetching, error , dispatch } = useContext(AuthContext)

    const submitHandler = (e) => {
        e.preventDefault();
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
    }
    
    console.log('user ',user)
    

  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    Let's Chat
                </h3>
                <span className="loginDesc">
                    Connect with friend's and the world around you on Let's Chat!
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={submitHandler}>
                    <input placeholder='Email' type="email" className="loginInput" ref={email} required/>
                    <input placeholder='Password' type="password" className="loginInput" ref={password} required minLength="6"/>
                    <button type="submit" className="loginButton" disabled={isFetching}>{ isFetching ? <CircularProgress /> : "Log In" }</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login