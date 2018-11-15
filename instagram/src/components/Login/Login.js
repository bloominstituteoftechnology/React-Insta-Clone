import React from 'react';
import "../Login/Login.css";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    handleSubmit = e => {
        const user = this.state.username;
        const pass = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', pass);
        window.location.reload();
    }

    render() {
        return (
            <div className='login-container'>
                <form className='login-form-content'>
                    <div className='login-title-container'>
                        <i className='fab fa-instagram' />
                        <span>InstaClone</span>
                    </div>
                    <input 
                        className='username-content' 
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <input 
                        className='password-content'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        );
    }
}

export default Login;