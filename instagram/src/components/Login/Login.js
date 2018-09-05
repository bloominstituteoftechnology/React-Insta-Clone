import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          userValue: '',
          passValue: '',
          userCreate: '',
          passCreate: '',
          index: props.ind,
          loginShow: true,
          rejected: false,
      };
    }
  
    /**
     *  Check if the username and password is valid and login the user
     *  and if invalid, display text stating username or password is
     *  incorrect
     */
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.props.check(this.state.userValue, this.state.passValue)) {
            this.setState({rejected: false})
        } else {
            this.setState({rejected: true})
        }
        
    }

    // Update username value for Login
    updateInputValue(e) {
        this.setState({
            userValue: e.target.value,
            rejected: false
        });
    }

    // Update password value for Login
    updatePassValue(e) {
        this.setState({
            passValue: e.target.value,
            rejected: false
        });
    }

    // Creates an account by setting localstorage
    createAccount = (e) => {
        localStorage.setItem(this.state.userCreate, this.state.passCreate);
        this.setState({loginShow: true})
    }

    // Update username value for Create Account
    updateCreateInputValue(e) {
        this.setState({
            userCreate: e.target.value
        });
    }

    // Update password value for Create Account
    updateCreatePassValue(e) {
        this.setState({
            passCreate: e.target.value
        });
    }

    // Toggles between Login and Creating an account
    updateCreate = (e) => {
        if (this.state.loginShow) {
            this.setState({loginShow: false})
        }
        else {this.setState({loginShow: true})}
    }
  
    render() {
        if (this.state.loginShow) {
            return (
                <div className="login">
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <label className="login-title">Login</label><br /><br />
                        <input type="input" value={this.state.userValue} onChange={e => this.updateInputValue(e)} name="userInput" placeholder="Username" />
                        <input type="password" value={this.state.passValue} onChange={e => this.updatePassValue(e)} name="passInput" placeholder="Password" />
                        <label className={this.state.rejected ? 'login-reject' : 'login-rejected hidden'}>I'm sorry, the username or password is incorrect</label>
                        <input type="button" onClick={e => this.handleSubmit(e)} value="Login" />
                        <label className="login-register">Don't have one? <label className="register" onClick={this.updateCreate}>Register</label> for one!</label>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="login">
                    <form className="create-form" onSubmit={this.createAccount}>
                        <label className="login-title">Create Account</label><br /><br />
                        <input type="input" value={this.state.userCreate} onChange={e => this.updateCreateInputValue(e)} placeholder="Username" />
                        <input type="password" value={this.state.passCreate} onChange={e => this.updateCreatePassValue(e)} placeholder="Password" />
                        <div className="create-buttons">
                            <input type="button" onClick={e => this.createAccount(e)} value="Register" />
                            <input type="button" onClick={e => this.updateCreate(e)} value="Cancel" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}



export default Login;