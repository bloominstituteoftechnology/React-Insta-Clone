import React, { Component } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ffcb05;
  color: #ffcb05;
  margin: 1em;
  padding: 0.25em 1em;
`
const Form = styled.form`
    width: 500px;
    background:  #00274c;
    color: #ffcb05;
    border-radius: 6px;
    margin: 10px auto;
    padding: 10px 25px;
`

const Input = styled.input`
    width: 170px;
    border-radius: 6px;
    margin: 10px;
    padding: 10px 25px;
`



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
    };

    render() {
        return (
            <Form >
                <h2> Please Login to Continue: </h2>

                <Input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />

                <Input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
                <br />
                <Button onClick={this.handleLogin}>
                    Log In
          </Button>

            </Form>
        );
    }
}

export default Login;