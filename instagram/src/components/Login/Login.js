import React, { Component } from 'react';
import logo from '../SearchBar/Images/logo.png';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Button = styled.button`
  width: 300px;
  height: 30px;
  background-color: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  `
  const Input = styled.input`
  width: 300px;
  background: papayawhip;
  border: 2px solid papayawhip;
  border-radius: 3px;
  border-radius: 3px;
  margin-bottom: 15px;
`
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
      <Container>
   
    <a href="#"><img src={logo} alt="insta-logo" /></a>
    
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
      <Button type="submit" value="Login" onClick={this.handleLoginSubmit}>Log In</Button>
      
      
      </Container>
  )}
}
export default Login