import React, { Component } from 'react'; 
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './login.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""

        };
    }

    handleInputChange = e = => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user)
        window.location.reload();
    };

    render() {
        return (
            <Form className="login-form">
                <h3>Instagram</h3>
                <div>Please Enter Login Information</div>
                <FormGroup>
                    <Input 
                        type="text"
                        placeholder="Username"
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

export default Login;