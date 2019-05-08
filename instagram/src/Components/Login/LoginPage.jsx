import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
  };

  handleLogin = event => {
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();
  };


  render() {
    return (
      <div className="loginPage">
        <h1>Login to Instagram Clone!</h1>
        <form className="loginForm">
          <input 
            type="text" 
            placeholder="username" 
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            />
          <input 
            type="text" 
            placeholder="password" 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            />
          <button onClick={this.handleLogin}>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
