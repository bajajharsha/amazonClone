import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom'
// import { auth } from "../../../../firebase"


function Login() {
    const history = useNavigate();

    // use states to keep track of email and password
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")




    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                    src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
                    alt="login"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="text" />
                    <h5>Paasword</h5>
                    <input value={password} type="password" />
                    <button type="submit" className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
