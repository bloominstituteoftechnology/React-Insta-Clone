import React from 'react';
import './Login.css'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            input: '',
            password: '',
        }

    }

    usernameInput = event => {
    this.setState({
      input: event.target.value
    });
  };

  passwordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  login = (event) => {
      event.preventDefault();
      this.props.updateLogin(this.state.username);
  }


render() {
    return (
        <div className="loginContainer">
            <form onSubmit={this.login}>
                <span>username</span><input value={this.state.input} onChange={this.usernameInput}></input>
                <span>password</span><input value={this.state.password} onChange={this.passwordInput}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
    }
}

export default Login;