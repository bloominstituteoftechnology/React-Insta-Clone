import React from 'react';
import './Login.css';
import styled from 'styled-components';

const LoginSection = styled.div`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginImg = styled.img`
    width: 200px;
    height: 200px;
    margin-top: 60px;
    margin-bottom: 40px;
`;

const Input = styled.input`
    width: 30%;
    margin-bottom: 20px;
    height: 24px;
    border-radius: 3px;
    font-size: 14px;
    padding-left: 10px;
`;


const Button = styled.button`
    width: 15%;
    font-size: 14px;
    border-radius: 3px;
    box-shadow: 2px 2px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsername = (event)=> {
        this.setState({
           username : event.target.value
        });
    };

    handlePassword = (event)=> {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event)=> {
        const user = this.state.username;
        const password = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', password)
        window.location.reload();
    };

    render() {
        return (
            <LoginSection>
                <LoginImg src='https://www.biscuitsandbath.com/wp-content/uploads/2018/05/instagram-logo-2.png' />
                <Input 
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleUsername}
                />
                <Input 
                    type='text'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.state.handlePassword}
                />
                <Button onClick={this.handleSubmit}>
                    Submit
                </Button>
            </LoginSection>
        );
    }
}

export default Login;