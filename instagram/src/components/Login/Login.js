import React, { Component } from 'react';
import {Button, Form, Input} from 'reactstrap';
import styled from 'styled-components';

const LoginContainer = styled.div`
    display: block;
    text-align: center;
    max-width: 880px;
    width: 100%;
`;

const LoginH4 = styled.h4`
    margin-top: 20px;
`;

const LoginP = styled.p`
    margin-top: 20px;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    login = event => {
        console.log("hi login function");
        const username = this.state.username;
        // const password = this.state.password;

        localStorage.setItem('username', username);
        const LSUsername = localStorage.getItem('username');
        console.log(LSUsername);

        // localStorage.setItem('password', password);
        // const LSPassword = localStorage.getItem('password');

        window.location.reload();
    }

    render() {
        return (
            <LoginContainer>
                <LoginH4>
                    Welcome to Fake-stagram!
                </LoginH4>

                <LoginP>
                    Please login.
                </LoginP>
                <Form>
                    <Input 
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChanges}
                    />
                    <Input
                        type="text"
                        name="password"
                        placeholder="password"
                        // value={this.state.password}
                        // onChange={this.handleChanges}
                    />

                    <Button onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </LoginContainer>
        )
    }
}

export default Login;