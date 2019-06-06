import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            username: 'Megan',
            password: 'password123'
        };
    }

    componentDidMount() {
        localStorage.setItem('username', this.state.username);
    }

    

    render() {
        return (
        <>
        <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password" />
            <button>Login</button>
        </form>
        </>);
    }
}

export default Login;