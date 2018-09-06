import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './LoginPage.css'


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    // HandleLoginInput method goes here
    // HandleLoginSubmit method 

    render() {
        return (
            <Form className="login-form">
                <h3>Welcome to React Insta Clone</h3>
                <div>Please Login</div>

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
                    <br />
                    <Button color="success" size="large" onClick={this.handleLoginSubmit}>
                        Log In
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default LoginPage;
