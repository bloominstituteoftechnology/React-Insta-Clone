import React, { Component } from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import loginLogo from './login-logo.png'
import styled from 'styled-components'

//styled login components

const LoginContainer = styled.div`
    box-sizing: border-box;
    width: 330px;
    background-color: white;
    border: 1px solid #E6E6E6;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const LoginLogo = styled.img`
    width: 155px;
`

const LoginInput = styled.input`
    box-sizing: border-box;
    height: 30px;
    width: 250px;
    text-align: left;
    border-radius: 3px;
    border: 1px solid #E6E6E6;
    background-color: #FAFAFA;
    padding-left: 5px;
    margin: 5px auto;
`

const LoginButton = styled.button`
    box-sizing: border-box;
    margin-top: 5px;
    background-color: #5097E9; 
    color: white;
    width: 250px;
    font-size: 14px;
    border: 0;
    border-radius: 3px;
    padding: 4px;
    font-weight: bold;
`

//login components

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            loggedIn: false
        }
    }

    //track username field change in input

    usernameChange = (e) => {
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
            <LoginContainer>
                <LoginLogo 
                    src={loginLogo}
                />
                <form onSubmit={this.login}>
                    <LoginInput 
                        type='text' 
                        placeholder='Username'
                        value={this.state.usernameInput}
                        onChange={this.usernameChange}
                    />
                    <br/>
                    <LoginInput 
                        type='text' 
                        placeholder='Password'
                    />
                    <br/>
                    <LoginButton>Log in</LoginButton>
                </form>
            </LoginContainer>
        )
    }
}

// checking proptypes for login section

export default Login;