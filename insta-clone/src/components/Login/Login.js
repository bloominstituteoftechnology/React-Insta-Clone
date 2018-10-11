import React from "react";
import Button from "@material-ui/core/Button";

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
      <form className="login-form" >
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <label>Password</label>
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
          outline
          block
          onClick={this.handleLogin}
        >
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
