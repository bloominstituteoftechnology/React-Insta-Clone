import React from 'react';

import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    login = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render(){
        return(
            <div className="form">
            <h2>Welcome to React Insta Clone</h2>
            <p>Please sign in to continue.</p>
            <form>
                <input type="text" placeholder="User Name" name="username" value={this.state.username} onChange={this.inputHandler} />
                <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.inputHandler} />
                <button onClick={this.login}>Login</button>
            </form>
            </div>
        )
    }
}

export default Login;