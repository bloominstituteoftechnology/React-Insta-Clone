import React from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleUsername = (event)=> {
        this.setState({
           username : event.target.value
        });
    };

    handlePassword = (event)=> {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event)=> {
        const user = this.state.username;
        const password = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', password)
        window.location.reload();
    };

    render() {
        return (
            <div className='login-section'>
                <img src='https://www.biscuitsandbath.com/wp-content/uploads/2018/05/instagram-logo-2.png' className='login-img' />
                <input 
                    className='input'
                    type='text'
                    placeholder='Username'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleUsername}
                />
                <input 
                    className='input'
                    type='text'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.state.handlePassword}
                />
                <button className='submit-button' onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Login;