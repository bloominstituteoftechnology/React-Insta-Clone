import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
//import './Login.css';

class LoginPage extends Component {
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
    window.location.reload(); //ask what the point of this is.
  };

  render() {
    return (
      <Form className="login-form">
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="Please enter your User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Please enter your password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
          <Button color="success" size="large" onClick={this.handleLoginSubmit}>
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginPage;
