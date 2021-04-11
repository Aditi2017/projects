import React from 'react'
import { useState } from "react";
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    
    const login = (event) => {
        event.preventDefault();
        //do login logic

        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in,redirect to homepage
            history.push("/");

        })
    
        .catch((e) => alert(e.message));
    };


    const register = (event) => {
        event.preventDefault();
        //do register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //created a user and logged in,redirect to homepage
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://cdn.logojoy.com/wp-content/uploads/2018/08/23161101/5-25.png"
                  alt="" />

            </Link>

            <div className="login__container">

                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type = "email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type = "password" />
                    <button onClick={login}  type="submit" className="login__signInButton">Sign In</button>
                    <p>By signing-in you agree to Boho's Conditions of Use & Sale. 
                    Please see your Privacy Notice, our Cookied Notice and our Interest-Based Ads Notice.</p>
                    <button onClick={register} type="password" className="login__registerButton">Create your Amazon Account</button>
                </form>
            </div>
            
        </div >
    )
}


export default Login
