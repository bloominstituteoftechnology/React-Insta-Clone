import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35%;
    min-width: 200px;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin: 300px auto;
    padding: 100px;
    
    .login-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
`
const LoginInput = styled.input`
    width: 100%;
    border: 1px solid #222222;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 1.2rem;
`

const LoginButton = styled.button`
    width: 30%;
    min-width: 200px;
    padding: 20px 40px;
    background: #3897F0;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 1.2rem;

`

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: this.username,
            password: this.password,
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        // this.forceUpdate();
    }

    render(){
        return (
        <LoginFormContainer>
            <img src="https://www.adroll.com/assets/img/homepage/logo-instagram.png" alt="logo"/>
            <form className='login-form' onSubmit={this.login}>
                <LoginInput
                    type="text"
                    placeholder="username"
                    className="username-input"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <LoginInput 
                    type="password"
                    placeholder="password"
                    className="password-input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <LoginButton type="submit">Login</LoginButton>
            </form>
        </LoginFormContainer>
        )
    }

}

export default Login;