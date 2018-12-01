import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import sc from "styled-components";

const FormDiv = sc.div`
  width: 500px;
  background: gray;
  border-radius: 6px;
  margin: 10px auto;
  padding: 10px 25px;
`;

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        };
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLogin = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render() {
        return (
            <FormDiv>
                <Form className='login-form'>
                    <h3>Welcome to Asa's React Insta Clone</h3>
                    <div>Please Login</div>
                    <FormGroup>
                        <Input
                            type='text'
                            placeholder='User Name'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            type='password'
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.state.handleInput}
                        />
                        <br />
                        <Button color='success' size='large' onClick={this.handleLogin}>                
                            Log In
                        </Button>
                    </FormGroup>          
                </Form> 
            </FormDiv>
        );
    }
}

export default Login;