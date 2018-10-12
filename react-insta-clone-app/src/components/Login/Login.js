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
    handleInput = event => {
        if (event.target.className === 'username'){
            this.setState({ 
                username: event.target.value
            });
            console.log(event.target.value)
            console.log(this.state)
        } else if (event.target.className === 'password'){
            this.setState({ 
                password: event.target.value
            });
            console.log(event.target.value)
            console.log(this.state)
        }
    }
    handleLogin = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
        console.log(event.target.value)
        console.log(this.state)
    };
    handleEnterPress = event => {
        if (event.key === 'Enter'){
            this.setState({ 
                password: event.target.value
            });
            console.log(event.target.value)
            console.log(this.state)
            const user = this.state.username;
            localStorage.setItem('user', user);
            window.location.reload();
        }
    }

    render() {
        return(
            <div className='login-box'>
                <h2>React-Insta-Clone</h2>
                <span>Please Login:</span>
                <InputComponent placeholder='Username' className='username'  input={this.handleInput} />
                <InputComponent placeholder='Password'  className='password'  input={this.handleInput} onEnter={this.handleEnterPress} />
                <br />
                <button onClick={this.handleLogin}>Login</button>
            </div>

            
        )
    }
}

export default Login;