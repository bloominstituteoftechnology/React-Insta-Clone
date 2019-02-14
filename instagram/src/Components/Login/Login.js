import React from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const LoginForm  = styled.form`
  display: flex;
  flex-direction: column;
`

class Login extends React.Component  {
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
        <LoginContainer>
          <LoginForm onSubmit={this.storeUsersInput}>
            <label for="username">Username</label>
            <input type="text" id="username" placeholder="Enter your username" value={this.state.username} onChange={this.handleUsernameChange}/> 
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <button type="submit">Login</button>
          </LoginForm>
        </LoginContainer>
      );  
 }

};

export default Login;