import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    console.log(this.state.username);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    localStorage.setItem("auth", `${this.state.username} is logged in`);
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleUsername" hidden>
              Email
            </Label>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              id="exampleUsername"
              placeholder="Username"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" hidden>
              Password
            </Label>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              id="examplePassword"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
