import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <>
                <form onSubmit={this.props.login}>
                    <input type='text' placeholder='Username' name='username' />
                    <input type='text' placeholder='Password' name='password'/>
                    <button>Login</button>
                </form>
            </>
        )
    }
}

export default Login;