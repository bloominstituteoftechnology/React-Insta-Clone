import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SignupForm.css'

const SignupForm = () => {
    let allUsers = [];
    const [user, setUser] = useState(()=> {
        let localData = localStorage.getItem("users")
        return localData ? JSON.parse(localData) : {username: "", password: ""}
    });
    const [ char, setChar ] = useState({checkUser: "", checkPassword: ""})
    // const [checkUser, setCheckUser] = useState(true)
    // const [checkPassword, setCheckPassword] = useState(true)
    
    useEffect(() => {
        return ()=> {
            allUsers.push(user)
            localStorage.setItem("users", JSON.stringify(allUsers));
        }
    }, [allUsers]);

    const validate = () => {
        let checkUser = ""
        let checkPassword = ""

        if(user.username.length < 5){
             checkUser = "username should be atleast 5 characters or more!"
        }

        if(user.password.length < 8){
             checkPassword = "password should be atleast 8 characters or more!"
        }

        if(user){
            setChar({checkUser, checkPassword})
        }

    }


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        console.log(validate ? true : false)
        validate()
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        validate()
    }


    return(
        <div className="signup__form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Instagram</h1>
                <input className="input-field" name="username"  type="text"
                 placeholder="username..." onChange={handleChange} required/>
                <span className="error-msg">{char.checkUser}</span>
                <input className="input-field" name="password"  type="password" placeholder="password..." onChange={handleChange} required/>
                <span className="error-msg">{char.checkPassword}</span>
                <Link to="/"><input className="input-btn" type="submit" 
                value="Sign up"/></Link>
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