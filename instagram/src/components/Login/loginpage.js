import React, { Component } from 'react'
import { InputStyles, InputHeaders, LoginBox, LoginButton } from '../styles';


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
      <LoginBox >
        {/* <img src=/>       */}
        <InputHeaders>Username:</InputHeaders>
        <InputStyles 
          placeholder='Enter Your Username'          
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}></InputStyles>
        <InputHeaders>Password:</InputHeaders>
        <InputStyles
          placeholder='Enter Your Password'
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}></InputStyles>
        <LoginButton onClick={this.loginSubmit} className='login-button'>Log In</LoginButton>
      </LoginBox>
    );
  }
}


export default LoginPage;