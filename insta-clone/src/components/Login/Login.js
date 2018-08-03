import React from 'react';
import logo from '../../assets/instagramlogin.png';
import { Form, Input, Button } from 'reactstrap';
import styled from 'styled-components';

const FormContainer = styled.div`
    border: 1px solid grey;
    width: 400px;
    padding: 20px;
    border-radius: 2px;
    margin: auto;
    background: lightgrey;
    margin-top: 100px;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    inputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    // updateUsername = event => {
    //     this.setState({ username: event.target.value });
    // }

    // updatePassword = event => {
    //     this.setState({ password: event.target.value })
    // }

    submitLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <FormContainer>
            <Form>
                
                <img src = {logo} alt="logo" />
                
                <Input 
                type="text" 
                placeholder="Username..." 
                name="username"
                value={this.state.username}
                onChange={this.inputChange}
                />

                <Input 
                type="text" 
                placeholder="Password..."  
                name="password"
                value={this.state.password}
                onChange={this.inputChange}
                />

                <Button  
                color="primary"
                onClick={this.submitLogin}
                >
                Login
                </Button>
            </Form>
        </FormContainer>
        );
    }
};

export default Login;