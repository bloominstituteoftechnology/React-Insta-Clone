import React, { Component } from 'react';
import styled from 'styled-components';
import WordLogo from '../../components/SearchBar/WordLogo';

const LoginContainer = styled.div`
    background-color: red;
    text-align: center;
    width: 570px;
    height: 300px;
    margin: 20px auto;
    border-radius: 10px;

    .userName {
        margin-right: 5px;
    }

    img {
        margin: 0px;
    }

    button {
        margin-left: 5px;
    }

    h2 {
        margin: 0px;
    }

    h4 {
        font-size: 2rem;
        margin: 0px;
    }
`

class Login extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: '',
                password: '',
                value: ''
            }
        }

        handleInputChange = e => {
            this.setState({ [e.target.name]: e.target.value }) 
        }

        handleSubmit = e => {
            let user = this.state.username
            localStorage.setItem('user', user)
            window.location.reload()
        }

        render() {
            return (
                <LoginContainer>
                    <h4>Welcome to React <WordLogo /> Clone</h4>
                    <h4>Security is our third highest priority</h4>
                    <h2>Please Enter Whatever</h2>
                    <input className = "userName"
                        type = 'text'
                        name = 'username'
                        placeholder = "User Name"
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                    />
                    <input
                        type = "password"
                        password = 'password'
                        placeholder = "Password"
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                    />  
                    <button onClick = {this.handleSubmit}>Log In</button>  
                </LoginContainer>
            )
        }
    }

export default Login;