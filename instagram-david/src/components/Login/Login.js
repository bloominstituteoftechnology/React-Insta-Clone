import React from "react";
import {
  LoginPage,
  LoginImgContainer,
  LoginImg,
  LoginContainer,
  Instagram,
  LoginForm,
  LoginInput,
  LoginButton
} from "./LoginStyles";
import instagramPhoto from "../../assets/instagram-login-phone-photo.jpg";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleLogIn = event => {
    localStorage.setItem("username", `${this.state.username}`);
    localStorage.setItem("password", `${this.state.password}`);
  };
  render() {
    return (
      <LoginPage>
        <LoginImgContainer>
          <LoginImg src={instagramPhoto} />
        </LoginImgContainer>
        <LoginContainer>
          <LoginForm>
            <Instagram>Instagram</Instagram>
            <LoginInput
              type="text"
              name="username"
              placeholder="Fake username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <LoginInput
              type="text"
              name="password"
              placeholder="Fake password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <LoginButton
              onClick={this.handleLogIn}
              disabled={this.state.username ? false : true}
            >
              Log In
            </LoginButton>
          </LoginForm>
        </LoginContainer>
      </LoginPage>
    );
  }
}

export default Login;
