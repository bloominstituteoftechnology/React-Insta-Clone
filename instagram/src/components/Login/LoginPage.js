import React from 'react';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
    }

    handleLogin = e => {
        localStorage.setItem('username', this.state.username)
    };

    handleUserInput = e => {
        this.setState({ username: e.target.value });
    };

    render() {
        return (
            <form className="login">
                <input 
                    onChange={this.handleUserInput} 
                    type="text" placeholder="Username" 
                    autocomplete="off" required />
                <input 
                    type="text" placeholder="Password" 
                    autocomplete="off" />
                <button onClick={this.handleLogin}>
                    Login
                </button>
            </form>
        );
    }
};

export default LoginPage;