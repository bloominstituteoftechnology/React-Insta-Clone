import React from 'react';
import {Form, FormGroup, Input} from 'reactstrap';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    handleLogin = () => {
        localStorage.setItem('username', this.state.username);
    };

    handleUserInput = e => {
        this.setState({ username: e.target.value });
    };

    render() {
        return (
            <div className="login">
                <h1>A Lovely Instagram Clone</h1>
                <Form>
                    <FormGroup className="mb-2">
                        <Input 
                            onChange={this.handleUserInput}
                            type="text" placeholder="Username"
                            autoComplete="off" required />
                    </FormGroup>
                    <FormGroup className="mb-1">
                        <Input 
                            type="password" placeholder="Password"
                            autoComplete="off" />
                    </FormGroup>
                    <button onClick={this.handleLogin}>
                        Login
                    </button>
                </Form>
            </div>
        );
    }
};

export default LoginPage;