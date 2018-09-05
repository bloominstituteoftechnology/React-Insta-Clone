import React from 'react';
import './LoginPage.css';

const LoginPage = props => {
  return (
    <div className="login-page-container">
        <div className="message-wrapper">
            <p>Welcome to Instagram!</p>
            <p>Please sign in to continue.</p>
                <div className="login-fields">
                <p>Username:</p><input type="text"></input>
                <p>Password:</p><input type="text"></input>
                <button>Login</button>
                </div>
        </div>
    </div>
  );
};

export default LoginPage;