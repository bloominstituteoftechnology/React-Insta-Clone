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
    handleUsernameInput = (event) => {
        this.setState({
            usernameInput: event.target.value
        })
    }
    
    handlePasswordInput = (event) => {
        this.setState({
            passwordInput: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.loginHandler(this.state.usernameInput, this.state.passwordInput);
    }
    
  render() {
    return (
      <div className="login-page">
        <div className="login-panel">
            <h1 className='login-title'>PLEASE LOG IN</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
                <input id="login-label" placeholder="Enter username" form="login-form" value={this.state.usernameInput} onChange={this.handleUsernameInput}/>
                 <input id="login-label" placeholder="Enter password" form="login-form" value={this.state.passwordInput} onChange={this.handlePasswordInput}/>
                <input type="submit" value="Log-in"/>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
