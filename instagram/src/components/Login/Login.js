import React, { Component } from 'react';

class Logins extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      passwordInput: ""
    }
  }


  changeInput = event => {this.setState({[event.target.name]: event.target.value});};

  loginSubmit = (event, i) => {
    event.preventDefault();
    const username = this.state.usernameInput;
    const password = this.state.passwordInput;
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    document.location.reload();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.loginSubmit}>
          <input
            type="text"
            name="usernameInput"
            className="username"
            onChange={this.changeInput}
            value={this.state.usernameInput}
          />
          <input
            type="text"
            name="passwordInput"
            className="password"
            onChange={this.changeInput}
            value={this.state.passwordInput}
          />
          <button onClick={this.loginSubmit}>Login</button>
        </form>
      </div>
    )
  }
}

export default Logins;
