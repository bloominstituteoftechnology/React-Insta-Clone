import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SignupForm.css'

const SignupForm = () => {
    let allUsers = [];
    const [user, setUser] = useState(()=> {
        let localData = localStorage.getItem("users")
        return localData ? JSON.parse(localData) : {username: "", password: ""}
    });
    
    useEffect(() => {
        allUsers.push(user)
        localStorage.setItem("users", JSON.stringify(allUsers));
    }, [user]);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({...user, username: "", password: ""})
    }

    return(
        <div className="signup__form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Instagram</h1>
                <input className="input-field" name="username"  type="text"
                 placeholder="username..." onChange={handleChange} required/>
                <input className="input-field" name="password"  type="password" placeholder="password..." onChange={handleChange} required/>
                <Link to="/"><input className="input-btn" type="submit" 
                value="Sign up" /></Link>
                <p className="login-text">Already have an account? 
                <a className="login-link link" href="/">Login</a>
                </p>
                <p className="or">Or</p>
                <a className="guest-link link" href="/home">Browse as guest</a>

            </form>
        </div>
    );
};

export default SignupForm;