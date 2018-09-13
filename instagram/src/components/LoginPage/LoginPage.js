import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
        console.log('setting state', event.target.name)
    }

    logIn = event => {
        localStorage.setItem('username', this.state.usernameInput);
        // window.location.reload();
    }

    render() {
        return (
            <div className="LoginPageDiv">
                <form>
                    <input onChange={this.handleChange} placeholder="username.." name="usernameInput"/>
                    <input onChange={this.handleChange} placeholder="password.." name="passwordInput"/>
                    <button onClick={this.logIn}></button>
                </form>
            </div>
        )
    }
}

export default LoginPage;