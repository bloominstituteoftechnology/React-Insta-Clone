import React, { Component } from 'react';
import styled from "styled-components"

const StyledLoginContainer = styled.div`
    background: linear-gradient(to bottom right, #00bbff, #344146);
    
`

const StyledLoginForm = styled.form`
    display: flex;
    justify-content: center;
    
 
`
const StyledLoginAlert = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40%;

`

const StyledLoginButton = styled.button`
    display: flex; 
    
`

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
        }
    }
    save = (event) => {
        this.setState({ username: event.target.value })
    }

    login = () => {
        localStorage.setItem("username", `${this.state.username}`)
    }

    render() {
        return (
            <StyledLoginContainer>
                <StyledLoginAlert>
                    <h1>Login to access our site!</h1>
                </StyledLoginAlert>

                <StyledLoginForm>
                    <input className="username-input" placeholder="Enter Username" onChange={this.save} />
                    <input classname="password-input" placeholder="Enter Password" />
                    <StyledLoginButton onClick={this.login}>Login</StyledLoginButton>
                </StyledLoginForm>
            </StyledLoginContainer>

        );
    }

}

export default Login;