import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    inputChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

    submitHandler = event => {
        const username = this.state.username;
        localStorage.setItem('user', username);
        window.location.reload();
    };


    render() {
        return(
            <form className="login">

            <input
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.inputChangeHandler}
            name="username"
            />

            <input
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.inputChangeHandler}
            name="password"
            />

            <button onClick={this.submitHandler}> Login </button>
            </form>
        );
    }
}

export default Login;