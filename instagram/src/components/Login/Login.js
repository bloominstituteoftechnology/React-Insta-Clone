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
                    <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
                </FormGroup>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        );
    }
}

export default Login;

