import React, { Component } from 'react';
import './Login.css';
import CreateAccount from './CreateAccount';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
          userValue: '',
          passValue: '',
          userCreate: '',
          passCreate: '',
          passCreate2: '',
          index: props.ind,
          loginShow: true,
          rejected: false,
          rejected2: false,
          createText: 'Passwords do not match'
      };
    }

    toggleLogin = (e) => {
        this.setState({loginShow: true});
    }
  
    /**
     *  Check if the username and password is valid and login the user
     *  and if invalid, display text stating username or password is
     *  incorrect
     */
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.userValue === '') {return;}

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
            rejected: false,
        });
    }

    // Update password value for Login
    updatePassValue(e) {
        if (e.keyCode === 13) {
            alert(e);
        }

        this.setState({
            passValue: e.target.value,
            rejected: false
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
                        <label className={this.state.rejected ? 'login-reject' : 'login-rejected hidden'}>Username or password is incorrect</label>
                        <input type="button" onClick={e => this.handleSubmit(e)} value="Login" />
                        <label className="login-register">Don't have one? <label className="register" onClick={this.updateCreate}>Register</label> for one!</label>
                    </form>
                </div>
            )
        }
        else {
            return (
                <CreateAccount showLogin={this.showLogin} updateCreate={this.updateCreate}/>
            )
        }
    }
}



export default Login;