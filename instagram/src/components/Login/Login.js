import React, { Component } from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    height: 300px;
    margin: 0 auto;
    background-color: lightgray;
    border: 1px solid black;
    border-radius: 8px;
    padding: 25px;
    margin-top: 100px;

`
const Button = styled.button `
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 8px;
`
const Title = styled.h4 `
    display: flex;
    justify-content: center;
    align-items: center;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }
    render() {
    return (
        <Container>
        <Form>
            <Title>Instagram Login</Title>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Username</Label>
          <Input 
            type="text" 
            name="username" 
            placeholder="User Name" 
            value={this.state.username}
            onChange={this.handleInputChange}
            required 
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={this.state.password}
            onChange={this.handleInputChange}
            required 
          />
        </FormGroup>
        <Button type="submit" value="Login" onClick={this.handleLoginSubmit} >Log In</Button>
      </Form>
      </Container>
    )
    }
}

export default Login;