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

    handleLoginInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };
    

    render() {
        return (
            // <form>
            //     <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleLoginInput}
            //     />
            //     <input type='text' placeholder='password' name='password' value={this.state.password} onChange={this.handleLoginInput}
            //     />
            //     <button onClick={this.handleLoginSubmit}>Login</button>
            // </form>

            <Form className="login-form">
            <h3>Welcome to React Insta Clone</h3>
            <div>Please Login</div>
            <FormGroup>
            <Input
            type="text"
            placeholder="User Name"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginInput}
            />
            </FormGroup>
            <FormGroup>
            <Input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginInput}
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
