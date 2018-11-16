import React, { Component } from 'react';
import { 
  Form, 
  FormGroup, 
  Input, 
  Button 
} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form>
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="Enter User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
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
