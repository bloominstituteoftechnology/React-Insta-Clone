import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  usernameHandler = e => {
   this.setState({ username: e.target.value });
  };

  pwHandler = e => {
   this.setState({ password: e.target.value });
  };

  login = () => {
    localStorage.setItem('username', this.state.username);
    this.setState({username: '', password: ''});
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <input placeholder='Username' onChange={this.usernameHandler} value={this.state.username}/>
        <input type='password' placeholder='Password' onChange={this.pwHandler} value={this.state.password}/>
        <button onClick={this.login}>Login</button>
      </div>
    );
  };
};

export default Login;
