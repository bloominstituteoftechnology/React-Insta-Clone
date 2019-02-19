import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            loggedIn: false
        }
    }


    userInput = (e) => {
        this.setState({
            usernameInput: e.target.value
        });
    }
    
    //store username in local storage

    login = (e) => {
        e.preventDefault();
        if (localStorage.getItem('username') === null) {
            localStorage.setItem('username', this.state.usernameInput);
            this.setState({
                loggedIn: true
            })
        }
        this.setState({
            usernameInput: '',
        });
        window.location.reload();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type='text' 
                        placeholder='Username'
                        value={this.state.usernameInput}
                        onChange={this.userInput}
                    />
                    <br/>
                    <input 
                        type='text' 
                        placeholder='Password'
                    />
                    <br/>
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

// checking proptypes for login section

export default Login;