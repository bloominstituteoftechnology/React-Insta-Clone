import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class LoginPage extends React.Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    usernameHandler = e => {
        this.setState({username: e.target.value})
    }

    passwordHandler = e => {
        this.setState({password: e.target.value})
    }

    loginSubmit = (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.password) {
            alert('Please enter valid username or password');
        } else {
            if(localStorage.getItem(this.state.username) && this.state.password !== localStorage.getItem(this.state.username) ) {
                alert('Wrong password')
            }
            else {
                localStorage.setItem(this.state.username, this.state.password)
                this.setState({username: '', password: ''})
            }
        }
    }
    
    render() {
        return (
            <Form onSubmit={this.loginSubmit} className="login">
            <FormGroup>
              <Label for="username">Username</Label>
              <Input 
                type="text" 
                name="username" 
                id="username" 
                placeholder="..enter username" 
                onChange={this.usernameHandler} 
                value={this.state.username}/>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="..enter password" onChange={this.passwordHandler} value={this.state.password}/>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        ) 
    }
}

export default LoginPage;