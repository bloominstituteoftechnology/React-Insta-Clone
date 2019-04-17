import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleLoginSubmit = event => {
        const user= this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    logOut = e => {
        e.preventDefault();
        const user = this.state.username;
        localStorage.removeItem('user', user);
        window.location.reload();
    }

    render() { 
        return (  
           <Form className='login-form'>
            <h1>Welcome to the InstaClone!</h1>
            <div>Please Login</div>
            <FormGroup>
                <Input 
                type='text'
                placeholder='UserName'
                name='username'
                value={this.state.username}
                onChange={this.handleInputChange}
                />
            </FormGroup>
            <FormGroup>
                <Input 
                type='password'
                placeholder='Password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
                />
            <br />
            <Button color='success' size='large' onClick={this.handleLoginSubmit}>Log In</Button>   
            <Button type="submit" onClick={this.logOut}>Logout</Button> 
            </FormGroup>
           </Form> 
        );
    }
}
 
export default Login;