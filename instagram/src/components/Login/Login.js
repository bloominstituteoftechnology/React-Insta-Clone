import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

  }

handleInputChange = event => {
  this.setState({[event.target.name]: event.target.value});
};

handleSubmit = event => {
  const user = this.state.username;
  localStorage.setItem('user', user);
  window.location.reload();
};

render() {
  return (
    
    <div className="Login">
        <form className="login-form">
          <h2>Please Login</h2>
          <div>
            <label>Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}
 
export default Login;

