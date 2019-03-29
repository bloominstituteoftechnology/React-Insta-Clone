import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Div from '../styles/div';
import { H1, LoginForm, Input } from '../styles/input';

import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        if (this.state.username && this.state.password !== '') {
            localStorage.setItem('user', JSON.stringify(this.state));
            this.props.login();
        } else {
            alert('Invalid Username and/or Password');
            this.setState({
                username: '',
                password: ''
            });
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Div fade>
                <Div login>
                    <H1>Log In:</H1>
                    <LoginForm
                        onSubmit={this.login}
                        className='login'
                    >
                        <Input
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <Input
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                            type='password'
                        />
                        <Button outline color='primary' size='lg'>Login</Button>
                    </LoginForm>
                </Div>
            </Div>
        )
    }
}
