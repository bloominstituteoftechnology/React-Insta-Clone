import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        };
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
           <Form className='login-form'>
              <h3>Welcome to Asa's React Insta Clone</h3>
              <div>Please Login</div>
              <FormGroup>
                <Input
                    type='text'
                    placeholder='User Name'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Input
                    type='password'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.state.handleInput}
                />
                <br />
                <Button color='success' size='large' onClick={this.handleLogin}>                
                    Log In
                </Button>
              </FormGroup>          
           </Form> 
        );
    }
}

export default Login;