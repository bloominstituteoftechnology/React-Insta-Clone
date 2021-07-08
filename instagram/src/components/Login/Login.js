import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    usernameHandler = event => {
        this.setState({username: event.target.value});
    }

    passwordHandler = event => {
        this.setstate({password: event.target.value});
    }

    login = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <div className='loginContainer'>
                <form>
                    <input onChange={this.usernameHandler} value={this.state.username} placeholder='Enter username' />
                    <input onChange={this.passwordHandler} value={this.state.password} placeholder='Enter password' />
                    <button onClick={this.login}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;