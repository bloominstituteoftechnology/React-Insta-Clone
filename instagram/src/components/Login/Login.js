import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Container } from "reactstrap";
// import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <Container>
        <Form>
          <h1>Just Log In</h1>
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
            <Button onClick={this.handleLoginSubmit}>Log In</Button>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Login;
