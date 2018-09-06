import React from 'react';
import logo from '../../assets/instagram-logo.png';

import './Login.css';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            displayClass: '',
            loginDivClass: 'show',
        };
    }

    componentDidMount() {
        // create 3 username and password combinations in an object
        const usernamesAndPasswords = {
            'Alice': 'AlicePass',
            'Bob': 'BobPass',
            'Carol': 'CarolPass',
        }

        // store the username and password object in local storage
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

                    return this.setState({
                        loginDivClass: 'hide',
                    }, () => {
                        setTimeout(() => window.location.reload(), 1500);
                    });
                }
            }
        }

        this.setState({
            displayClass: 'show',
        }, () => {
            return setTimeout(() => this.setState({displayClass: 'hide'}), 2000);
        });
    }

    render() {
        return (
            <div className = { `login-div ${this.state.loginDivClass}` }>
                <a href='https://www.instagram.com'><img className = 'instagram-logo' src = { logo } alt='instagram logo' /></a>

                <form className = 'login-form' onSubmit = { this.logIn } >
                    <div className = 'login-input-div'>
                        <input className = 'login-input' type = 'text' placeholder = 'Enter username...' />
                        <input className = 'login-input' type = 'text' placeholder = 'Enter password...' />
                    </div>

                    <button className = 'login-button' type = 'submit' >Log In</button>

                    <div>
                        <p className = { this.state.displayClass }>Wrong username / password. Try again.</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
