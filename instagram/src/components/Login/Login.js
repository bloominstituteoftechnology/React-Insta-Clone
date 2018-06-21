import React, { Component } from 'react';
import '../../images.css'

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false,
        };
    }

    loginInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    loginSubmitHandler = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };

    render () {
        return (
            <div>
            <form>
                <img className="InstaName" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo-768x217.png" alt="insta name"/>
                <input
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.loginInputHandler} />
                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.loginInputHandler} />
                <button onClick={this.loginSubmitHandler}>
                    Log in
                </button>
        
            </form>  
            </div>
        )};
}

export default Login;