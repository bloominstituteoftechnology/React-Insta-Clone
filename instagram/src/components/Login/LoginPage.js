import React from 'react';
import './login.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const username = this.state.username;
    const password = this.state.password;
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
  };

  render() {
    return (
      <div className="login">
        <h1>Please Log In</h1>
        <form>
          <input
            className="username"
            placeholder="Username"
            value={this.state.username}
            name="username"
            onChange={this.handleInput}
          />
          <input
            className="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleInput}
          />
          <button onClick={this.handleSubmit}>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
