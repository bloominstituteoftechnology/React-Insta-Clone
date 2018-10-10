import React, { Component } from 'react';
import './login.css';
import styled from 'styled-components';

const LoginTitle = styled.h1`
    //font-family: 'Poiret One', cursive;
    font-size: 48px;
    text-shadow: 3px 3px 0 darkslategray,
    color: white;
`

const LoginInput = styled.input`
    margin: 15px 0;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 10px slategray;
    padding-left: 10px;
    font-family: 'Poiret One', cursive;
    font-size: 20px;
`

const LoginButton = styled.button`
    margin: 15px 0;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 0 10px slategray;
    padding-left: 10px;
    
`

const PageLogin = styled.div`
    height: 100vh;
    width: 100vw;
    background: #b22020;
`

const PandaImg = styled.img`
    width: 400px;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    };

    handleLoginChange = event => {
        this.setState({[event.target.name]: event.target.value})
      };

    loginHandler = (e) => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    };

    render() {
    return ( 
        <PageLogin className="d-flex justify-content-center">
            <form autoComplete="off" className="login-container d-flex flex-column justify-content-center"> 
                <PandaImg src={require("../img/lambda-red.jpg")} alt=""/>
                <LoginTitle>Lambda-Gram</LoginTitle>
                <LoginInput
                    type="text" 
                    placeholder="Enter User Name" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.handleLoginChange}
                />
                <LoginInput
                    type="password" 
                    placeholder="Enter Password" 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleLoginChange}
                />
                <LoginButton
                    onClick={this.loginHandler}>
                    Login
                </LoginButton>
            </form>
        </PageLogin>
    )};
}
 
export default Login;