import React, { Component } from "react";
import ('./Login.css');

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: '',
            passwordInput: '',
        }
    }
    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginHandler(this.state.usernameInput, this.state.passwordInput);
        this.setState({
            usernameInput: '',
            passwordInput: ''
        });
    }
    
  render() {
    return (
      <div className="login-page">
        <div className="login-panel">
        <h1><i className="login-icon fab fa-instagram" /></h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
                <input id="login-label" name="usernameInput" placeholder="Enter username" form="login-form" value={this.state.Input} onChange={this.handleUsernameInput}/>
                 <input id="login-label" name="passwordInput" placeholder="Enter password" form="login-form" value={this.state.Input} onChange={this.handlePasswordInput}/>
                <input type="submit" value="Log-in"/>
          </form>
          <h1 className='login-title'>PLEASE LOG IN</h1>
        </div>
      </div>
    );
  }
}

export default Login;
