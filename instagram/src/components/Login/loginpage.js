import React, { Component } from 'react'
import './loginpage.css';

class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state ={
      content:props.content,
      username:'',
      password:''
    }
  }
  handleInputChange = event => this.setState({ [event.target.name]: event.target.value });
  
  loginSubmit = () => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };
  
  render(){  
    return (
      <div className='login-stuff'>
        {/* <img src=/>       */}
        <h2>Username:</h2>
        <input 
          className='login-username' 
          placeholder='Enter Your Username'          
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}></input>
        <h2>Password:</h2>
        <input 
          className='login-password' 
          placeholder='Enter Your Password'
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}></input>
        <button onClick={this.loginSubmit} className='login-button'>Log In</button>
      </div>
    );
  }
}


export default LoginPage;