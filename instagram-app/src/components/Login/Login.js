import React from "react";
import styled from 'styled-components';

const LoginWrapper = styled.div`
  font-family: 'Pacifico', cursive;
  margin: 0 auto; 
  margin-top: 10%; 
  border-radius: 10%; 
  width: 60%;  
  padding-top: 10%; 
  padding-bottom: 10%; 
  background-color: black; 
  color: white; 
`;

const LoginTitle = styled.h1`
  font-size: 3rem; 
`; 

const LoginSubtitle = styled.h2`
  font-size: 1.5rem; 
  font-family: 'Oswald', sans-serif;
`;

const LoginButtonsWrapper = styled.form`
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

const LoginInput = styled.input`
  width: 30%; 
  margin: 2%; 
  font-family: 'Oswald', sans-serif;
  font-size: 1rem; 

`;

const LoginButton = styled.button`
  width: 20%; 
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  margin-top: 3%; 
  border-radius: 10%; 
  color: black; 
  background-color: white; 

  :hover {
    background-color: black; 
    color: white; 
  }
`;

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
          username: e.target.value 
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
        <LoginTitle>Dollygram</LoginTitle>
        <LoginSubtitle>Find out who you are and do it on purpose.</LoginSubtitle>
        <LoginButtonsWrapper>
          <LoginInput
            onChange={this.handleLogin}
            className="username"
            type="text"
            name="username"
            placeholder="...Type username"
            
          />

          <LoginInput
            className="password"
            type="password"
            name="password"
            placeholder="...Type password"
            
          />

          <LoginButton onClick={this.login}>Login</LoginButton>
        </LoginButtonsWrapper>
      </LoginWrapper>
    );
  }
}

export default Login;
  