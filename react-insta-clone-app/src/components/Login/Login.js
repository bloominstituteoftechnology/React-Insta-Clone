import React from 'react';
import './Login.css'
import InputComponent from '../SearchBar/SearchBar-Input'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    handleInput = ({event}) => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
        console.log('input')
    }
    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload(true);
        console.log('login')
    };

    render() {
        return(
            <div className='login-box'>
                <h2>React-Insta-Clone</h2>
                <span>Please Login:</span>
                <input name='username' className='username-password' value={this.state.username} onChange={this.handleInput} />
                <input password='password' className='username-password' value={this.state.password} onChange={this.handleInput} />
                <br />
                <button onClick={this.handleLogin}>Login</button>
            </div>

            
        )
    }
}

export default Login;