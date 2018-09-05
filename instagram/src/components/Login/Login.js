import React from 'react';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
  }

  usernameText = (e) => {
    this.setState({
      username: e.target.value
    });
  }

  setStorage = (e) => {
    e.preventDefault();
    localStorage.setItem('username', this.state.username);
    window.location.reload();
  }


  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.setStorage}>
          <input onChange={this.usernameText} className="username-input" type="text" placeholder="Username" />
          <button onClick={this.setStorage} className="login-button">Login</button>
        </form>
      </div>
    )
  }
}