import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from "reactstrap";
import styled from 'styled-components';

const Header = styled.header`

`;

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    // handleLogin = () => {
    //     localStorage.setItem('username', `${this.state.username}`);
    // };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    // saveLogin = e => {
    //     this.setState({ username: e.target.value });
    // };

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem("user", user);
        window.location.reload();
    }

    render() {
        return(
            <Form className="login-form">
                <header>
                <h3> welcome to my shitty React IG knockoff </h3>
                <div> LOGIN! </div>
                </header>
                <FormGroup>
                    <Input
                        type='text'
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
            //  <form>
            //     <input
            //     placeholder="username"
            //     onChange={this.saveLogin}
            //     />
            //     <input
            //     placeholder="password"
            //     />
            //     <button onClick={this.handleLogin} />
            // </form> 
        );
    }
};

export default Login;