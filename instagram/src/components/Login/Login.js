import React, { Component } from 'react';
import './login.scss';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        this.state.username && this.state.password !== '' && localStorage.setItem('user', JSON.stringify(this.state));
        e.target.submit();
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div className='login'>
                <div>
                    <h1>Log In:</h1>
                    <form
                        onSubmit={this.login}
                        className='login'
                    >
                        <input
                            placeholder='Username'
                            name='username'
                            value={this.state.username}
                            onChange={this.handleChanges}
                        />
                        <input
                            placeholder='Password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChanges}
                        />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}
