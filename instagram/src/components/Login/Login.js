import React from 'react'
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password: ''
        }
    }

    userAuth = ev => {
        this.setState({ [ev.target.name]: ev.target.value})
    }
    
    loginSubmit = ev => {
        const user = this.state.username;
        localStorage.setItem('user', user)
        window.location.reload();
    }


    render() {
        return (
            <div className="login-form">
                <form>
                    <input className="username-input"
                           name="username"  
                           value={this.state.username} 
                           placeholder="Phone number, username, or email"
                           onChange={this.userAuth} 
                           />
                    <input className="user-password"
                           name="password"
                           value={this.state.password}
                           placeholder="Password"
                           onChange={this.userAuth} 
                           />
                    <button onClick={this.loginSubmit}>Log In</button>
                </form>
            </div>
        )
    }

}

export default Login