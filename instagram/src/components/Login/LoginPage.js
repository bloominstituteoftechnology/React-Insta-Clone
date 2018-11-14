import React, { Component } from 'react';
import Login from './Login';

class LoginPage extends Component {
  constructor(){
    super();
    this.state=({
      users: []
    })
  }

  login = () => {
    localStorage.setItem('username', 'anonymous') 
    this.setState();
  }
  

  render() {
    return (
      <Login login={this.login}/>
    );
  }
}

export default LoginPage;