import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { auth } from "../../../../firebase";
import "./Login.css";

function Login() {
    const history = useNavigate();

    // use states to keep track of email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your authentication logic here, e.g., using Firebase auth
        // auth.signInWithEmailAndPassword(email, password)
        //     .then((userCredential) => {
        //         // Successfully signed in
        //         const user = userCredential.user;
        //         // Redirect to the homepage or any other page after successful sign-in
        //         history("/"); // Replace this with the path you want to navigate to
        //     })
        //     .catch((error) => {
        //         // Handle sign-in errors
        //         console.error(error.message);
        //     });
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png"
                    alt="login"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
}

export default Login;
