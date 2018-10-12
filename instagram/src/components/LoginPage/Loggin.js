import React, { Component } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
    background-color: red;
    text-align: center;
    width: 100%;
    height: 300px;
    margin-left: 20px;
`

const Welcome = styled.div`
    margin-top: 40px;
    padding-top: 40px;
    font-size: 2rem;
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
                    <Welcome>Welcome to React Insta Clone</Welcome>
                    <h4>Security is our third highest priority</h4>
                    <h2>Please Enter Whatever</h2>
                {console.log(this.state.username)}
                    <input
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