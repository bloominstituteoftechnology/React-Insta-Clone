import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    localStorage.setItem('username', this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username..."
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Username</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password..."
              onChange={this.onChangeHandler}
            />
          </FormGroup>
          <Button color="primary" onClick={this.login}>
            Log In
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
