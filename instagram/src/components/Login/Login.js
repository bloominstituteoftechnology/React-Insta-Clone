import React from 'react';

import './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hint: false,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login() {
    if (this.state.username && this.state.password === 'lambda') {
      this.props.handleLogin(this.state.username, this.state.password);
    } else {
      this.setState({
        hint: true,
      });
    }
  }

  render() {
    return (
      <div className="login--form">
        <form>
          <input name="username" onChange={e => this.handleChange(e)} type="text" placeholder="Username"/>
          <input name="password" onChange={e => this.handleChange(e)} type="text" placeholder="Password"/>
          <button type="button" onClick={() => this.login()}>Log In</button>
        </form>
        <ul className="login--hint" style={{display: this.state.hint ? 'block' : 'none' }}>
          <li>
            Username must have at least one character
          </li>
          <li>
            Password: lambda
          </li>
        </ul>
      </div>
    );
  }
}

export default Login;