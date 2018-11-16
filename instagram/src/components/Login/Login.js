import React, { Component } from 'react';
import Authenticate from '../Authentication/Authentication'; 
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 20%;
`;

const TextField = styled.div`
    padding: 20%;
    background-color: blue;
    width: 70px;
    height: 30px;
`;

const LoginPage = props => {
    return (
        <div>
            <LoginContainer>
                <h2>Login</h2>
            <form onSubmit={props.updateUser}>
            <TextField>
                <input
                    className="username-input"
                    type="text"
                    placeholder="Your username.."
                    name="username"
                    value={props.usernameInput}
                    onChange={props.usernameChange}
                />
            </TextField>
                <input 
                    className="password-input"
                    type="text"
                    placeholder="Your password.."
                    name="password"
                    value={props.passwordInput}
                    onChange={props.passwordChange}
                />
                <button onClick={props.updateUser}>Login</button>
            </form>
            </LoginContainer>
        </div>
    )
}

// export default Authenticate(LoginPage)
export default LoginPage