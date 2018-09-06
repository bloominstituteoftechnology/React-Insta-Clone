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

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form className = 'login-form'>
        <h3>Welcome to React Insta Clone</h3>
        <div>Please log in.</div>
        <FormGroup>
          <Input
            type = 'text'
            placeholder = 'Username'
            name: 'username'
            value = {this.state.username}
            onChange = {this.state.handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Input
            type = 'password'
            placeholder = 'Password'
            name = 'password'
            value = {this.state.password}
            onChange = {this.state.handleInputChange}
          />
          <br />
          <Button color = 'success' size = 'large' onClick = {this.state.handleLoginSubmit}>
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
