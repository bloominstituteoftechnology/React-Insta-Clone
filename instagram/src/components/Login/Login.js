import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <form>
        <h3>Welcome to React Insta Clone</h3>
        <div>Please Login</div>

        <input 
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />

        <input 
          type="password"
          placeholder="Password" 
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <br />
        <button onClick={this.handleLoginSubmit}>Log In</button>
      </form>
    );
  }
}

export default Login;