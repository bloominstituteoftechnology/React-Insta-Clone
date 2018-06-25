import React from 'react';
import './login.css';

const Login = (props) => (
    <div className='bg'>
    <div className='login-form'>
            <div class='heading'>
                <h1>Instagram</h1>
            </div>
            <form className='myform' onSubmit={props.login}>
                <input className='myinput' onChange = {props.handleInputChange} type='text' name='username' placeholder='username'></input>
                <input className='myinput' type='text' name='password' placeholder='password'></input>
        <button className='mybutton'>Click here to login</button>
        </form>
            <form><button className='secondary-button'>No Account? Sign up Here!</button></form>
            <img className='store-buttons' src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt=""></img>
            <img className='store-buttons' src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt=""></img>
    </div>
    <div className='large-right'>
            
            <span className='tagline'>Capture and Share the World's Moments.</span>
    </div>
    
    </div>
);

export default Login;
