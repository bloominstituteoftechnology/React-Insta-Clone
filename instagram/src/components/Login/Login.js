import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loggedInState: '',
            password: ''
        }
    }

    checkLogin = e => {
        e.preventDefault();
        localStorage.setItem('username', this.state.loggedInState);
        window.location.reload()
    }

  

    handleLogin = e => {
        this.setState({
                loggedInState: e.target.value
        })
    }

    render (){
        return (
            <div>
            <div>Login to Instagram!</div>
                <form>
                <input 
                    placeholder="Enter Username"
                    type="text"
                    value={this.state.loggedInState}
                    onChange={this.handleLogin}
                 />
                <input 
                    placeholder="Password"
                    type="text"
                    value={this.state.password}
                />
            <button type="submit" onClick={this.checkLogin}>Log In</button>
  
          </form>
            </div>
        )
    }
}

export default Login;