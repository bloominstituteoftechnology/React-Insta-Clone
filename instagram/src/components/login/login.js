import React from 'react';
import { form } from 'reactstrap';

import './login.css';

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
      <form  onSubmit = {this.loginUser} className="login">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" onChange={this.setUsername} value={this.state.username} /> 
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" placeholder="Password" onChange={this.setPassword} value={this.state.password}/>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }

}

export default Login;