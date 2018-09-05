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

    handleInput = (event)=> {
        this.setState({
           [ event.target.name ] : event.target.value
        });
    };

    handleSubmit = (event)=> {
        const user = this.state.username;
        localStorage.setItem('user', user);
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
                    onChange={this.handleInput}
                />
                <input 
                    className='input'
                    type='text'
                    placeholder='Password'
                    name='password'
                    value={this.state.password}
                    onChange={this.state.handleInput}
                />
                <button className='submit-button' onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Login;