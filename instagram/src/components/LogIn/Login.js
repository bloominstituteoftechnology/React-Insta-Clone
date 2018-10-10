import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleInputChange = event => {
        this.setState ({ [event.target.name]: event.target.value});
    };

    loginAttempt = () => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render () {
        return (
            <form className = 'loginInput'>
                <input 
                    className = 'login-user'
                    type= 'text'
                    name = 'username'
                    placeholder = 'Username'
                    value = {this.state.username}
                    onChange = {this.handleInputChange}
                />
                <input 
                    className = 'login-password'
                    type = 'text'
                    name ='password'
                    placeholder = 'Password'
                    value = {this.state.password}
                    onChange = {this.handleInputChange}
                />
                <button className = 'login-button' onClick = {this.loginAttempt} >
                    Log In
                </button>
            </form>
        )
    }

}

export default Login;