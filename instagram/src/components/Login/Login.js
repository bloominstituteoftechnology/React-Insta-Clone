import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

handleSubmit = e => {
  localStorage.setItem('username', this.state.username)
  window.location.reload();
}

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.handleSubmit}>
          <h3>username</h3>
          <input 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInput}
          />
          <h3>password</h3>
          <input 
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInput}
            />
        </form>
        <button onClick={this.handleSubmit}>login</button>
      </div>
    );
  }
}

export default Login;
