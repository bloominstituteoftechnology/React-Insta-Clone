import React, { Component } from "react";
import { Button, Form, FormGroup, Input} from 'reactstrap';
import "./login.css";

class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        username: "",
        password: ""
      };
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      handleLoginSubmit = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };

      render() {
          return (
            <Form className="login-form">
            <h2>React Insta Clone</h2>
            <div>Login</div>
          <FormGroup>
            <Input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            size="large"
            onClick={this.handleLoginSubmit}
          >
            Login
          </Button>
        </Form>
          );
      }
}

export default Login;