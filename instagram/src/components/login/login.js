import React from 'react';
import { InputLabel, InputBox, Button } from '../styles/basicStyles';
import { LoginForm } from '../styles/loginStyles'; 

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    }
  }

  setUsername = (event) => {
    if(event.target.value) this.setState({username: event.target.value});
  }

  setPassword = (event) => {
    if(event.target.value) this.setState({password: event.target.value});
  }

  loginUser = () => {
    if(this.state.username) localStorage.setItem("currentUser", this.state.username);
  }

  render() {
    return (
      <LoginForm  onSubmit = {this.loginUser}>
        <div>
          <InputLabel htmlFor="username">Username</InputLabel>
          <InputBox name="username" type="text" placeholder="Username" onChange={this.setUsername} value={this.state.username} /> 
        </div>
        <div>
          <InputLabel htmlFor="inputPassword">Password</InputLabel>
          <InputBox name="inputPassword" type="password" placeholder="Password" onChange={this.setPassword} value={this.state.password}/>
        </div>
        <Button type="submit" color="primary">Login</Button>
      </LoginForm>
    )
  }

}

export default Login;