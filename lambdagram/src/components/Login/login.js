import React from 'react';
// import './login.css';
import Styled from 'styled-components';

import camera from '../../assets/camera.png';
import lambdagram from '../../assets/lambdagram.png';

const LoginHeader = Styled.div`
    width: 100%;
    height: 50px;
    top: 0;
    position: fixed;
    z-index: 99;
    background-color: #ffffff;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LoginLogo = Styled.div`
    display: flex;
`;
const Divider = Styled.div`
    border: none;
    background-color: #000000;
    width: 1px;
    height: 32px;
    margin: auto 5px;
`;
const LoginForm = Styled.form`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 100px auto;
    max-width: 600px;
    height: 50px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background-color: white;
`;

class Login extends React.Component {
    handleLogin = (event) => {
        localStorage.setItem("InstagramUsername", event.target.user.value);
    }

    render() {
        return (
            <div>
                <LoginHeader>
                    <LoginLogo>
                        <img src={camera} alt='Camera' />
                        <Divider />
                        <img src={lambdagram} alt='Lambdagram' />
                    </LoginLogo>
                </LoginHeader>
                <LoginForm onSubmit={this.handleLogin}>
                    <label htmlFor='user'>Username:</label>
                    <input name='user' type='text'></input>
                    <label htmlFor='pw'>Password:</label>
                    <input name='pw' type='password'></input>
                    <input type='submit' value='Login'></input>
                </LoginForm>
            </div>
        );
    }
}

export default Login;
