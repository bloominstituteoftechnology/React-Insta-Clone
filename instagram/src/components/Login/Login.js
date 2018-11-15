import React from 'react';
// import PropTypes from 'prop-types';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: this.username,
            password: this.password,
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
        // this.forceUpdate();
    }

    render(){
        return (
        <div className="login-form-container">
            <form className='login-form' onSubmit={this.login}>
                <input 
                    type="text"
                    placeholder="username"
                    className="username-input"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    placeholder="password"
                    className="password-input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button type="submit">Login</button>
            </form>
        </div>
        )
    }

}

export default Login;