import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  userChange = (event) => {
    this.setState({username: event.target.value})
  }

  pwChange = (event) => {
    this.setState({password: event.target.value})
  }

  handlePWSubmit = (event) => {
    const user = this.state.username;
    const pw = this.state.password;
    localStorage.setItem('user', user, 'password', pw);
    window.location.reload();
  }

  render() {
    return (
      <form onSubmit={this.handlePWSubmit}>
        <label >Username:</label>
        <input onChange={this.userChange} type="text" id="username" name="username" value={this.state.username} />

        <label>Password:</label>
        <input onChange={this.pwChange} type="text" id="password" name="password" value={this.state.password} />

        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default Login;
