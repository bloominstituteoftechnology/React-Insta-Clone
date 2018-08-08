import React, { Component } from "react";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      authorized: false
    };
  }
  handleSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>You must login first to view content</h1>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="username" hidden>
              Username
            </Label>
            <Input
              onChange={this.handleInput}
              type="text"
              name="username"
              id="exampleUsername"
              placeholder="Username"
              value={this.state.username}
              name="username"
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              onChange={this.handleInput}
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password"
              value={this.state.password}
              name="password"
            />
          </FormGroup>{" "}
          <Button color="info">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
