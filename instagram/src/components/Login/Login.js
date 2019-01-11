import React, { Component } from 'react';
import { Form, Button, Input} from 'reactstrap';
import styled from 'styled-components';

const Container = styled.div`
    width: 400px;
    
   
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
    <Form>
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
      
      </Form>
      </Container>
  )}
}
export default Login