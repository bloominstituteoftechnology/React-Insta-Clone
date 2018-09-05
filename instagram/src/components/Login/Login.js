import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    logIn = (e) => {
        e.preventDefault();
        localStorage.setItem('username', e.target[0].value);
        window.location.reload();
    }

    render() {
        return (
            <div className = 'login-div'>
                <form className = 'login-form' onSubmit = { this.logIn } >
                    <div className = 'login-input-div'>
                        <input className = 'login-username-input' type = 'text' placeholder = 'Enter username...' />
                    </div>
                    {/* <input type = 'text' placeholder = 'Enter password...' /> */}
                    <button className = 'login-button' type = 'submit' >Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;
