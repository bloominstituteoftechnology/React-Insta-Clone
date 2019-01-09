import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  login = event => {
    // event.preventDefault();
    localStorage.setItem('username', this.state.username);
    // this.setState({ username: "" })
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input onChange={this.onChange} type="text" name="username" placeholder="Username"></input>
          <input onChange={this.onChange} type="password" name="password" placeholder="Password"></input>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;