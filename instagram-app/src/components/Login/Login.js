import React from "react";
import styled from 'styled-components';

const LoginWrapper = styled.div`
  border: 2px solid red; 
`


class Login extends React.Component {
  constructor() {
    super();
    this.state = {
        username: " ", 
        password: " ",
    };
  }

  // Login handler 
  handleLogin = e => {
      this.setState({
          username: e.target.value,
          password: e.target.value, 
      })
  }


  // Login function 
  login = e => {
      e.preventDefault(); 

      // setting a username on local storage 
      localStorage.setItem('username', this.state.username); 

      // Forcing page to reload when user logs in 
      window.location.reload(); 
  }

  render() {
    return (
      <LoginWrapper>
        <h1>Dollygram</h1>
        <h4>Find out who you are and do it on purpose.</h4>
        <form>
          <input
            onChange={this.handleLogin}
            className="username"
            type="text"
            name="username"
            placeholder="...username"
            
          />

          <input
            onChange={this.handleLogin}
            className="password"
            type="text"
            name="password"
            placeholder="...password"
            
          />

          <button className='login-btn' onClick={this.login}>Login</button>
        </form>
      </LoginWrapper>
    );
  }
}

export default Login;
  