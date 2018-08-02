import React, {Component} from 'react';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
    }
  }

  usernameHandler = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passwordHandler = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toStorage = event => {
    event.preventDefault();
    console.log(event.target.value);
    console.log("authenticationDidMount")
    localStorage.setItem("Username", `${this.state.username}`)
    localStorage.setItem("Password", `${this.state.password}`)
    this.setState({
      username: "",
      password: "",
    })

    let userCheck = '';
    userCheck = localStorage.getItem('username');
    if (userCheck === '') {
      console.log("usernameEmpty");
    } else {
      console.log("usernameLogged")
      this.setState({
        loggedIn: true,
      })
    }
  }

  render(){
    return (
      <div className="login">Login.js
        <h1>LOGIN PAGE</h1>
        <form
          className="login"
          onSubmit={this.toStorage}>
          <input
            value={this.state.username}
            placeholder="name"
            onChange={this.usernameHandler}>{this.value}</input>
          <input
            value={this.state.password}
            placeholder="password"
            onChange={this.passwordHandler}>{this.value}</input>
          <button
            onClick={this.toStorage}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
