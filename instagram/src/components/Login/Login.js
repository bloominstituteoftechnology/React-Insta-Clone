import React from 'react';
import './Login.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = event => {
        this.setState({ username: event.target.value });
    }

    handlePassword = event => {
        this.setState({ password: event.target.value });
    }

    loginButton = () => {
        if (this.state.username === '' && this.state.password === '') {
            alert('You need to enter a username and password!');
            return;
        }
        if (this.state.username === '') {
            alert('You need to enter a username!');
            return;
        }
        if (this.state.password === '') {
            alert('You need to enter a password!');
            return;
        }

        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);

        window.location.reload();
    }

    render() {
        return (
            <div className='login-form-container'>
                <Form className='login-form'>

                    <FormGroup className='instagram-word-container'>
                        <img className='login-instagram-word' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='' />
                    </FormGroup>

                    <FormGroup>
                        <Input autoComplete="off" value={this.state.username} onChange={this.handleUsername} type="username" name="username" id='username' placeholder="Username" required />
                    </FormGroup>

                    <FormGroup>
                        <Input value={this.state.password} onChange={this.handlePassword} type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>

                    <Button style={this.state.username.length > 0 || this.state.password.length > 0 ? { background: '#3897F0' } : { opacity: .3 }} onClick={this.loginButton}>Log In</Button>

                    <FormGroup className='forgot-form'>
                        <a className='forgot-password' href='#_'>Forgot password?</a>
                    </FormGroup>

                </Form>

                <div className='bottom-login-content'>
                    <div className='bottom-text'>
                        Don't have an account? <a className='sign-up' href='#_'>Sign up</a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;