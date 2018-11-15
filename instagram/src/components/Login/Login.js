import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmitLogin = event => {
        localStorage.setItem('user', this.state.username);
        window.location.reload();
    }

    render() {
        return (
            <>
                <div>Login Page Yo</div>
                <form>
                    <input 
                        type="text"
                        placeholder="Enter your user name"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInput}
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInput} 
                    />

                    <button onClick={this.handleSubmitLogin}>Log In</button>

                </form>
            </>
        )
    }
}

export default Login;