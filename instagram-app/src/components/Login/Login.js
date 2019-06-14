import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handlInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    }

    render() {
        return (
            <Form className="login">
                <h2>Insta Clone</h2>
                <div>Login Here</div>
                <FormGroup>
                    <Input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />    
                </FormGroup>
                <FormGroup>
                    <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    /> 
                    <Button size="large" onClick={this.handleLoginSubmit}>
                    Log In
                    </Button>    
                </FormGroup>
            </Form>
        )
    }
}

export default Login;