import React, { Component } from 'react';
import reactstrap, { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
      <Form className="user-login">
        <h2>Instagram</h2>
        <h3>Login or Sign-up</h3>
        <div className="please">Please Login</div>
        <div className="login-form">
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
        </FormGroup>
        </div>
        <Button color="success" size="large" onClick={this.handleLoginSubmit}>
            Log In
          </Button>
      </Form>
    );
  }
}

export default Login;