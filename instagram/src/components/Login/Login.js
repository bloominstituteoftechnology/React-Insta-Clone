import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #717B86;
`;

const Form = styled.form`
    border: 4px solid white;
    background: #BFC0C5;
    border-radius: 5px;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 80px 50px;
    position: relative;

    ::before {
        content: 'SIGN IN';
        width: 300px;
        height: 80px;
        background: #00BFFF;
        color: white;
        position: absolute;
        top: -30px;
        left: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.4rem;
        letter-spacing: 4px;
    }
`;

const LoginButton = styled.button`
    background: #00BFFF;
    transition: background 0.5s ease;
    color: white;
    font-size: 2rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    justify-self: flex-end;

    :hover {
        background: #0098CC;
        transition: background 0.5s ease;
    }
`;

const Input = styled.input`
    padding: 10px 5px;
    margin: 0 0 10px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
    }

    usernameChangeHandler = (event) => {
        this.setState({
             username: event.target.value
        })
    }
    
    submitLogin = () => {
        window.localStorage.setItem('username', this.state.username);
    }

    render() {
        return (
            <WrapperDiv>
                <Form onSubmit={this.submitLogin}>
                    <Input type="text" placeholder="username" value={this.state.username} onChange={this.usernameChangeHandler} />
                    <Input type="password" placeholder="password" />
                    <LoginButton type="submit">LOGIN</LoginButton>
                </Form>
            </WrapperDiv>
        );
    }
}

export default Login;

// invokes the App.login() function once the user logs in (on form submit?)