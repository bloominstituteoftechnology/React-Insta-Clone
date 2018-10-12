import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './login.css';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleInputChange = el => {
        this.setState({ [el.target.name]: el.target.value });
    };

    handelLoginSubmit = el => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render(){
        const disableLogin = this.state.username.length < 5 || this.state.password.length < 8;

        return(
            <Form className="login-form">

                <h3>Welcome to React Insta-Clone</h3>
                <div>Please Login</div>

            <FormGroup>
                <Input 
                type="text"
                placeholder="User Name"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                />
            </FormGroup>

            <FormGroup>
                <Input 
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                />

                <br />

                <Button
                color="success"
                size="large"
                disabled={disableLogin}
                onClick={this.handelLoginSubmit}>
                Log in
                </Button>
            </FormGroup>
            </Form>
        );
    }
}

export default LoginPage;