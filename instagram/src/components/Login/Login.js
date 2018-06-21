import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }

    addUsername = event => {
        this.setState({username: event.target.value})
    }
    addPassword = event => {
        this.setState({password: event.target.value})
    }
    LoginButton = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password); 
        window.location.reload();
    }
    
    render() {
        return (
            <form className="login-page">
             <div className="login-card">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" />
                <input
                    type="text" 
                    onChange={this.addUsername}
                    placeholder="Phone number, username, or email" 
                />
                <input 
                    type="password"
                    onChange={this.addPassword}
                    placeholder="Password"
                />
                <button onClick={this.LoginButton}>Log in</button>
                <p><a href="https://www.instagram.com/accounts/password/reset/?hl=en">Forgot password?</a></p>
             </div>



            </form>
            
        )

    }

}

export default Login;