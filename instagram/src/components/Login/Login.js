import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  login = (event) => {
    event.preventDefault();
    console.log('login test');
    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);
    window.location.reload();
    console.log(localStorage);
  };

  render() {
    return (
      <form>
        <input
          placeholder="Username"
          name="username"
          onChange={this.handleChange}
        />
        <input
          placeholder="Password"
          name="password"
          onChange={this.handleChange}
          type="password"
        />
        <button onClick={this.login}>Login</button>
      </form>
    );
  }
}

export default Login;
