import React from 'react';
import './Login.css'
import InputComponent from '../SearchBar/SearchBar-Input'
import styled from 'styled-components';

const LoginBox = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid;
    background-color: grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 340px;
`
const LoginButton = styled.button`
    background-color: green;
    height: 25px;
    width: 15%;
`

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    handleInput = event => {
        if (event.target.className.includes('username')){
            this.setState({ 
                username: event.target.value
            });
            console.log(event.target.value)
            console.log(this.state)
        } else if (event.target.className.includes('password')){
            this.setState({ 
                password: event.target.value
            });
            console.log(event.target.value)
            console.log(this.state)
        }
    }
    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
        console.log(event.target.innerHTML)
        console.log(this.state)
    };
    handleEnterPress = event => {
        if (event.key === 'Enter'){
            console.log(event.target.value)
            console.log(this.state)
            const user = this.state.username;
            localStorage.setItem('user', user);
            window.location.reload();
        }
    }

    render() {
        return(
                <LoginBox>
                    <h1>React-Insta-Clone</h1>
                    <span>Please Login:</span>
                    <InputComponent placeholder='Username' className='username'  input={this.handleInput} />
                    <InputComponent placeholder='Password'  className='password'  input={this.handleInput} onEnter={this.handleEnterPress} />
                    <br />
                    <LoginButton onClick={this.handleLogin}>Login</LoginButton>
                    <br />
                </LoginBox>   
        )
    }
}

export default Login;