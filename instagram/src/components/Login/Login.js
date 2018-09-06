import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    componentDidMount() {
        const usernamesAndPasswords = {
            'Alice': 'AlicePass',
            'Bob': 'BobPass',
            'Carol': 'Carolpass',
        }

        localStorage.setItem('usernamesAndPasswords', JSON.stringify(usernamesAndPasswords));
    }

    logIn = (e) => {
        e.preventDefault();
        const usernamesAndPasswords = JSON.parse(localStorage.getItem('usernamesAndPasswords'));

        for (let key in usernamesAndPasswords) {
            if (e.target[0].value === key) {
                if (e.target[1].value === usernamesAndPasswords[key]) {
                    // give loggedIn the value of the username (key) that is logged in
                    localStorage.setItem('loggedIn', key);
                    return window.location.reload();
                }
            }
        }

        return console.log("wrong username/password.");
    }

    render() {
        return (
            <div className = 'login-div'>
                <form className = 'login-form' onSubmit = { this.logIn } >
                    <div className = 'login-input-div'>
                        <input className = 'login-input' type = 'text' placeholder = 'Enter username...' />
                        <input className = 'login-input' type = 'text' placeholder = 'Enter password...' />
                    </div>
                    <button className = 'login-button' type = 'submit' >Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;
