import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
      }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
}

 handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
}
render() {
  return (
    <div>
    <h1>Instagram</h1>
    <Input 
      type="text" 
      name="username" 
      placeholder="User Name" 
      value={this.state.username}
      onChange={this.handleInputChange}
            />
      <Input 
      type="password" 
      name="password" 
      placeholder="Password" 
      value={this.state.password}
      onChange={this.handleInputChange}
      />
      <Button type="submit" value="Login" onClick={this.handleLoginSubmit} >Log In</Button>
      </div>
  )}
}
export default Login