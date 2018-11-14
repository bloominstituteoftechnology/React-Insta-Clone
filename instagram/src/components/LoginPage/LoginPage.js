import React from 'react';

import './LoginPage.css';

const LoginPage = props => {
    return (
        <div className="container">
            You must be logegd in to view the site
            <form>
                <div>Username</div>
                <input />
                <div>Password</div>
                <input />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage