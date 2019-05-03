import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Users from '../../users';
import NewLogin from './NewLogin'
import { Button } from 'reactstrap';
import Div from '../styles/div';
import { H1, LoginForm, Input } from '../styles/input';

import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            users: JSON.parse(localStorage.getItem('users')) === null ?
                Users
                :
                JSON.parse(localStorage.getItem('users'))
        }
    }

    login = e => {
        e.preventDefault();
        if (this.state.users.filter(user => user.username === this.state.username && user.password === this.state.password).length > 0) {
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
                    <Link to={{
                        pathname: '/newlogin',
                        state: { users: this.state.users }
                    }}>New user?</Link>
                    <Route
                        exact
                        path='/newlogin'
                        component={NewLogin}
                    />
                </Div>
            </Div>
        )
    }
}
