/*  - The component should invoke the `login` function in `app.js` 
when a user logs in.
  - This login function should set a `username` on `localStorage`. 
  
  You'll need to check local storage to see if a user is logged in.

  - Be sure to force the page to reload when a user logs in 
  so that our component un-mounts and mounts again.*/


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
        <Form className="login-form">
          <h3>Welcome to React Insta Clone</h3>
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
            <Button color="success" size="large" onClick={this.handleLoginSubmit}>
              Log In
            </Button>
          </FormGroup>
        </Form>
      );
    }
  }
  
  export default Login;
  