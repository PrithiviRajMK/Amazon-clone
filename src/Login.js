import React, {useState} from "react";

import "./Login.css";
import {Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";
function Login(){
    const history= useHistory();
    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("");
    const login= event =>{
        event.preventDefault();
       auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
        })
        .catch(e=>alert(e.message));
    };
    const Register= event =>{
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history.push("/");
        })
        .catch(e=>alert(e.message));
    };
    return (
        <div className="login">
        <Link to="/">
            <img className="Login_image"
            src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt="LOgo"
            />
    
        </Link>
        <div className="login_container">
        <h1> Sign in</h1>
        <form>
        <h5>E-Mail</h5>
        <input value={email} onChange={event =>setEmail(event.target.value)} type="email" />
        <h5>Password</h5>
        <input value={password} onChange={event =>setpassword(event.target.value)} type="password" />
        <button onClick={login} type="submit" className="signinbut"> Sign In </button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={Register} className="Registerbut"> Create Your AKimo Account</button>
        </div>
        </div>

    );
}

export default Login;