import React, { Component } from 'react';

class Login extends Component {
    render() {
    return (
        <form>
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="submit" value="Login" />
        </form>
    )
    }
}

export default Login;