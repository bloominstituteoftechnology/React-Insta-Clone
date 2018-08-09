import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <Form>
                <h3>Welcome to React Insta-Clone</h3>
                <div>Please Login</div>
                <Formgroup>
                    <Input
                        type='text'
                        placeholder='User Name'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleInputChange}    
                    />
                </Formgroup>
                <Formgroup>
                    <Input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Button color='success' size='large' onClick={this.handleLoginSubmit}>
                    Log In
                    </Button>
                </Formgroup>
            </Form>
        );
    }
};

export default Login;