import React from 'react';
import styled from 'styled-components';
import instagramlogo from './instagramlogo.png';

const LoginPage = styled.div`
    background-color: #FAFAFA;
    display: flex;
    justify-content: center;
`;

const LoginWrapper = styled.div`
    background-color: #FFFFFF;
    border: 1px solid lightgrey;
    padding: 25px 35px;
    margin-top: 75px;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Logo = styled.img`
    width: 70%;
    margin: 10px;
`;
const Form = styled.form`

`;
const Input = styled.input`
    width: 100%;
    line-height: 30px;
    margin: 3px 0;
    background-color: #FAFAFA;
    border: 1px solid lightgrey;
    border-radius: 5px;
`;
const Button = styled.button`
    width: 100%;
    background-color: #3797F0;
    color: white;
    border-radius: 5px;
    margin: 3px 0;
    line-height: 25px;
    font-size: 14px;
`;


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmitLogin = event => {
        localStorage.setItem('user', this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <LoginPage>
                <LoginWrapper>
                    <Logo src={instagramlogo} alt="logo" />
                    <Form>
                        <Input 
                            type="text"
                            placeholder="  Phone number, username, or email"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleInput}
                        />

                        <Input
                            type="password"
                            placeholder="  Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInput} 
                        />

                        <Button onClick={this.handleSubmitLogin}>Log in</Button>

                    </Form>
                </LoginWrapper>
            </LoginPage>
        )
    }
}

export default Login;