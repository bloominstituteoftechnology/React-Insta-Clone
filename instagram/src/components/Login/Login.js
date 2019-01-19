import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }
    setUsername = event => {
        this.setState({ username: event.target.value });
    }

    setPassword = event => {
        this.setState({ password: event.target.value });
    }

    login = () => {
        if (!window.localStorage.getItem('username')) {
            window.localStorage.setItem('username', JSON.stringify(this.state.username));
            window.localStorage.setItem('password', JSON.stringify(this.state.password));
        }
    }
    render() {
        return (
            <div className="login" >
                <form onSubmit={this.login}>
                    <input type="text" placeholder="username" onChange={this.setUsername} />
                    <input type="text" placeholder="password" onChange={this.setPassword} />
                    <button>login</button>
                </form>
            </div>
        );
    }
}

export default Login;