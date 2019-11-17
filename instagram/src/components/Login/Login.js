import React, { Component } from 'react';
import style from 'styled-components';

const LoginPage = style.form`
    border: 1px solid grey;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    max-width: 640px;
    margin: 0 auto;
    background-color: grey;

    h2{
        margin: 20px 0 0 12.5%;
    }

    input {
        margin: 40px 0 0 12.5%;
        width: 50%;
        height: 25px;
        border-radius: 5px;
    }
    
    button {
        width: 20%;
        margin: 40px 0 40px 12.5%;
        height: 40px;
    }
`

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    userInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    loginHandler = (event) => {
        if (
            `${this.state.username}` !== '' &&
            `${this.state.password}` !== ''
        ) {
            localStorage.setItem('username', `${this.state.username}`);
            localStorage.setItem('password', `${this.state.password}`);
            window.location.reload();
        } else {
            alert('Missing username or password');
        }
    }

    render() {
        return (
            <LoginPage>
                <h2>Login</h2>
                <input
                    onChange={this.userInput}
                    className='user-login'
                    placeholder='Username...'
                />
                <input
                    onChange={this.passwordInput}
                    className='password'
                    placeholder='Password...'
                />
                <button onClick={this.loginHandler}>Login</button>
            </LoginPage>
        )
    }
}

export default Login;