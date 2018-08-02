import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor() {
        super();
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
        localStorage.setItem("user", user);
        window.location.reload();
    };
    render() {
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="text" name="username" placeholder="User Name" value={this.state.username}
                        onChange={this.handleInputChange} />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password"  placeholder="Password" value={this.state.password}
                        onChange={this.handleInputChange} />
                </FormGroup>
                <Button onClick={this.handleLoginSubmit}>Submit</Button>
            </Form>
        );
    }
}

export default Login;

