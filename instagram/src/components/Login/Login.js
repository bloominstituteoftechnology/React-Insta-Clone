import React from 'react';
import styled from 'styled-components';

const LogoDiv = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

const LoginFormDiv = styled.div`
  margin: 0 auto;
  max-width: 899px;
  width: 100%;
  height:1000px;
  padding-top: 90px;
  background-image: url("https://picsum.photos/899/1000");
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  font-size: 21px;
`;

const LoginButton = styled.button `
  margin-top: 10px;
  width: 150px;
  background-color:#7992af
`;

const LogoImage = styled.img `
  height: 60px;
`;

const LoginPage = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7992af;
`;

const LoginInput = styled.input `
  text-align: left;
`;

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  userChange = (event) => {
    this.setState({username: event.target.value})
  }

  pwChange = (event) => {
    this.setState({password: event.target.value})
  }

  handlePWSubmit = (event) => {
    const user = this.state.username;
    const pw = this.state.password;
    localStorage.setItem('user', user, 'password', pw);
    window.location.reload();
  }

  render() {
    return (
      <LoginPage>
        <LogoDiv><LogoImage src="https://i.warosu.org/data/fa/img/0113/35/1464364597775.jpg" /><LogoImage src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png " alt="Logo" /></LogoDiv>

        <LoginFormDiv>
          <LoginForm onSubmit={this.handlePWSubmit}>
            <label >Username:</label>
            <LoginInput onChange={this.userChange} type="text" id="username" name="username" placeholder="Username..." value={this.state.username} />

            <label>Password:</label>
            <LoginInput onChange={this.pwChange} type="text" id="password" name="password" placeholder="Password..." value={this.state.password} />

            <LoginButton type="submit">Log In</LoginButton>
          </LoginForm>
        </LoginFormDiv>
      </LoginPage>
    )
  }
}

export default Login;
