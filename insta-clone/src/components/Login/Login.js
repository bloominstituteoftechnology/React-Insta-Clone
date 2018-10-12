import React from "react";
import Button from "@material-ui/core/Button";
import { LoginHeader, LoginWrapper, FormGroup } from "../Styles/StyleLogin";
import traffic from "../../imgs/Traffic_disco.mp4";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleLogin = () => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <LoginWrapper>
        {/* <VWrapper src={traffic} alt="" /> */}
        <video src={traffic} autoPlay loop />

        <LoginHeader>Insta-Clone</LoginHeader>
        <FormGroup>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />

          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleLogin}
          >
            Login
          </Button>
        </FormGroup>
        <div />
      </LoginWrapper>
    );
  }
}

export default Login;
