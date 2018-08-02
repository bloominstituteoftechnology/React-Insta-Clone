import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  usernameEdit = e => {
    this.setState({ username: e.target.value });
  }

  passwordEdit = e => {
    this.setState({password: e.target.value});
  }

  login = e => {
    const user = this.state.username;
    const pass = this.state.password;
    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    window.location.reload();

  }

  render(){
    return (
      <form>
        <input value={this.state.username} onChange={this.usernameEdit} placeholder="username" />
        <input value={this.state.password} onChange={this.passwordEdit} placeholder="password" />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
