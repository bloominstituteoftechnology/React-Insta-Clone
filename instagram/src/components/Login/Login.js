import React, { Component } from 'react';

class LoginForm extends React.Component  {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
  
        };
    }
 
 handleUsernameChange = event => {
    this.setState({
        username: event.target.value,
    });
  };

  handlePasswordChange = event => {
    this.setState({
        password: event.target.value,
    });
  };

  storeUsersInput = () => {
    localStorage.setItem('username', JSON.stringify(this.state.username));
  }


 render(){
    return (
        <div className="login-form">
          <form onSubmit={this.storeUsersInput}>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" value={this.state.username} onChange={this.handleUsernameChange}/> 
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <button type="submit">Login</button>
          </form>
        </div>
      );
 }

};

export default LoginForm;