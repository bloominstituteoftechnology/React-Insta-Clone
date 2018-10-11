import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    render() {
    return (
        <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Username</Label>
          <Input 
            type="text" 
            name="username" 
            placeholder="User Name" 
            value={this.state.username}
            onChange={this.handleInputChange}
            required 
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handleInputChange}
            required 
          />
        </FormGroup>
        <Button type="submit" value="Login" onClick={this.handleLoginSubmit} >Log In</Button>
      </Form>
    )
    }
}

export default Login;