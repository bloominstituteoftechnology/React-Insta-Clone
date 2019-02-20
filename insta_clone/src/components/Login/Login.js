import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem('loggedIn') === 'true') {
      this.setState({ loggedIn: this.setState.loggedIn });
    }
    localStorage.setItem('loggedIn', this.setState.loggedIn);
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('loggedIn', this.state.loggedIn);
    window.location.reload();
  };
  render() {
    return (
      <div style={loginBox}>
        <h1>Login</h1>
        <input
          style={inputs}
          placeholder={'UserName'}
          onChange={this.handleUsername}
          value={this.state.username}
          name="username"
          type="text"
        />

        <input
          style={inputs}
          placeholder={'Password'}
          onChange={this.handlePassword}
          value={this.state.password}
          name="password"
          type="text"
        />
        <button style={button} onClick={this.signIn}>
          Login
        </button>
      </div>
    );
  }
}

const button = {
  width: '75%',
  fontSize: '30px',
  borderStyle: 'none',
  backgroundColor: 'white'
};

const inputs = {
  width: '70%',
  padding: '10px',
  margin: '10px'
};

const loginBox = {
  margin: '50px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexWrap: 'wrap',
  width: '500px',
  height: '300px',
  backgroundColor: 'black',
  color: 'white'
};

export default Login;
