import React from "react";
import { LoginForm } from "../Styles";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('username', user);
    window.location.reload();
  }

  render() {
    console.log('login');
  return (
    <LoginForm onSubmit={this.handleSubmit}>
      <h2>InstaClone</h2>
      <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
      <input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
      <input type="submit" value="Log In" />
    </LoginForm>
  );
};
}

export default Login;
