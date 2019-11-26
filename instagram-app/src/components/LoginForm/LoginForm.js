import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './LoginForm.css'

const LoginForm = () => {
    let login;
    const [user, setUser] = useState({
        username:"",
        password: ""
    });

    const [isAuth, setIsAuth] = useState(false);
    // const [char, setChar] = useState("")

    const handleChangeLog = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
        // console.log(e.target.name);
    };

    const handleSubmitLog = (e) => {
        e.preventDefault()
        let truthyFalsey, getUserInfo, results, check;
        getUserInfo = localStorage.getItem("users");
        results = JSON.parse(getUserInfo);
        console.log(results)
        check = results.map(el => {
            return el.username === user.username && el.password === user.password;
        });
        // console.log(typeof(check))
         truthyFalsey = check[0]
        //  console.log(truthyFalsey === true)
         setIsAuth(truthyFalsey)
    }
    
     login = isAuth ? <Link to="/home">
    <input className="input-btn" type="submit" value="Login"/>
    </Link> : <input className="input-btn" type="submit" value="Login"/>

    


    return(
        <>
        {isAuth ? <Redirect  to="/home"/> : null}
        <div className="login__form-container">
            <form className="login-form" onSubmit={handleSubmitLog}>
                <h1>Instagram</h1>
                <input className="input-field" name="username" type="text"
                 placeholder="username..." onChange={handleChangeLog} required/>
                <input className="input-field" name="password" type="password"
                 placeholder="password..." onChange={handleChangeLog} required/>
                 <div>
                 {login}
                 </div>
                <p className="login-text">Dont have an account? 
                <a className="signup-link link" href="/signup">Sign up</a>
                </p>
                <p className="or">Or</p>
                <a className="guest-link link" href="/home">Browse as guest</a>

            </form>
        </div>
        </>
        
    );
};

export default LoginForm;