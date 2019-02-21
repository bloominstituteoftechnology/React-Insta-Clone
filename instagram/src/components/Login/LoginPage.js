import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import IGLogo from '../../assets/iglogo.png';
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
      <Form className="login-form">
        <img alt="instagram logo text" src={IGLogo} className="logo-image-text" />
        <FormGroup>
          <Input
            type="text"
            placeholder="Phone number, username, or email"
            name="username"
            className="login-text"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Password"
            name="password"
            className="login-text"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <br />
        </FormGroup>
        <Button color="success" size="large" className="loginbtn" onClick={this.handleLoginSubmit}>
            Log In
          </Button>
        <p style={{color: '#999999', fontWeight: "bold"}}>OR</p>
        <a style={{backgroundColor: '#ffffff', color: '#003569', fontWeight: "bold"}} size="large" onClick={this.handleLoginSubmit}>
          Log in with Facebook
          </a>
          <br/>
          <p style={{color: '#003569'}}>Forgot password?</p>
      </Form>
    );
  }
}

export default Login;
