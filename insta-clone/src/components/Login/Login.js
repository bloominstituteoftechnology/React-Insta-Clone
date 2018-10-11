import React from "react";
import { Button } from "reactstrap";

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      username: '',
    }
  }

  componentDidMount = () => {
    const user = localStorage.getItem("username");
    this.setState({ username: user });
    }
    handleLogin = () => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload
    }

  render() {
    return (
      <form action="">
        <label>Username</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <Button color="secondary" size="lg" outline block>
          Login
        </Button>
      </form>
    );
  }
}

export default Login;
