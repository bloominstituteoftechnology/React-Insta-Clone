import React from 'react';
import './LoginPage.css';

const LoginPage = props => {
    if (props.loggedIn === false){
  return (
    <div className="login-page-container">
        <div className="message-wrapper">
            <p>Welcome to Instagram!</p>
            <p>Please sign in to continue.</p>
                <div className="login-fields">
                <p>Username:</p><input type="text"></input>
                <p>Password:</p><input type="text"></input>
                <button onSubmit={props.loggedIn}>Login</button>
                </div>
        </div>
    </div>
  );
}

};

export default LoginPage;