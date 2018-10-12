import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const LoginContainer = styled.div``

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
                <div>
                    <h3>Welcome to React Insta Clone</h3>
                    <h4>Saftey is our third highest priority</h4>
                    <h2>Please Enter Whatever</h2>
                {console.log(this.state.username)}
                    <input
                        type = 'text'
                        placeholder = "User Name"
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                    />
                    <input
                        type = "password"
                        placeholder = "Password"
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                    />  
                    <button onClick = {this.handleSubmit}>Log In</button>  
                </div>
            )
        }
    }

export default Login;