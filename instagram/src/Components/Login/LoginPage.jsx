import React from "react";
import styled from 'styled-components';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
  };

  handleLogin = event => {
      const user = this.state.username;
      localStorage.setItem('user', user);
      window.location.reload();
  };


  render() {
    return (
      <LoginPageStyled>
        <h1>Login to <span>Instagram</span> Clone!</h1>
        <FormStyled>
          <input 
            type="text" 
            placeholder="username" 
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            />
          <input 
            type="text" 
            placeholder="password" 
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            />
          <button onClick={this.handleLogin}>Log In</button>
        </FormStyled>
      </LoginPageStyled>
    );
  }
}

const LoginPageStyled = styled.div`
  // border: 1px solid black;
  margin: 50% auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    span{
      font-family: "Dancing Script", cursive;
    }
    
  }
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 3px auto;
    border-radius: 3px;
  }

  button {
    border-radius: 3px;
    margin: 3px auto;
  }
`


export default LoginPage;
