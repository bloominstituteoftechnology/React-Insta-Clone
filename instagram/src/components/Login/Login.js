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
          loginShow: true
      };
    }
  
    // Set the dummyData when the component mounts
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('handlesubmit');
        // localStorage.setItem('InstaUser', this.state.userValue);
        // localStorage.setItem('InstaPass', this.state.passValue);
        // console.log('handlesubmit');
        this.props.check(this.state.userValue, this.state.passValue);
    }

    updateInputValue(e) {
        this.setState({
            userValue: e.target.value
        });
    }

    updatePassValue(e) {
        this.setState({
            passValue: e.target.value
        });
    }

    createAccount = (e) => {
        localStorage.setItem(this.state.userCreate, this.state.passCreate);
        this.setState({loginShow: true})
    }

    updateCreateInputValue(e) {
        this.setState({
            userCreate: e.target.value
        });
    }

    updateCreatePassValue(e) {
        this.setState({
            passCreate: e.target.value
        });
    }

    updateCreate = (e) => {
        // this.setState(prevState => ({
        //     loginShow: !prevState.loginShow
        // }));

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
                        <label>Login</label><br /><br />
                        <input type="input" value={this.state.userValue} onChange={e => this.updateInputValue(e)} name="userInput" placeholder="Username" />
                        <input type="input" value={this.state.passValue} onChange={e => this.updatePassValue(e)} name="passInput" placeholder="Password" />
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
                        <label>Create Account</label><br /><br />
                        <input type="input" value={this.state.userCreate} onChange={e => this.updateCreateInputValue(e)} placeholder="Username" />
                        <input type="input" value={this.state.passCreate} onChange={e => this.updateCreatePassValue(e)} placeholder="Password" />
                        <div className="create-buttons">
                            <input type="button" onClick={e => this.createAccount(e)} value="Create" />
                            <input type="button" onClick={e => this.updateCreate(e)} value="Close" />
                        </div>
                    </form>
                </div>
            )
        }
    }
}



export default Login;