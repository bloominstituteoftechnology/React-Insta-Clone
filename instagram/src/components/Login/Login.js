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

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    loginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <Form className='login-form'>
                <h3>React Insta Clone</h3>
                <p>Please Login</p>

                <FormGroup>
                    <Input
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Input
                        type='text'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.state.handleChange}
                    />
                </FormGroup>

                <Button color='success' size='large' onClick={this.loginSubmit}>Log In</Button>
            </Form>
        );
    }
}

export default Login;