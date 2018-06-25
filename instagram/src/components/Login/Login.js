import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }
  loginFunction = event => {
    event.preventDefault();
    let username = this.state.username;
    username = this.state.currentUser;
    this.setState({
      currentUser: "",
      username: username
    });
    localStorage.setItem("username", username);
    document.location.reload();
  };
  handleNewLogin = event => {
    this.setState({ currentUser: event.target.value });
  };

  render() {
    return (
      <Form onSubmit={this.loginFunction}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          {/* <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label> */}
          <Input
            name="email"
            id="Email"
            placeholder="Username"
            type="text"
            onChange={this.handleNewLogin}
            value={this.state.currentUser}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          {/* <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label> */}
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}
