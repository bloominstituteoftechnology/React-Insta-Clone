import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    changeHandle = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    loginHandle = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };
    render() {
        return (
            <Form className="login-page">
                <h1>Please Log In</h1>
                <FormGroup>
                    <Input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.changeHandle}
                        />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.changeHandle}
                        />
                        <br />
                        <Button onClick={this.loginHandle}>
                         Please Log In
                        </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Login;