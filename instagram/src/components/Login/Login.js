import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
  }

  usernameStore = event => {
    this.setState({
      username: event.target.value
    });
  };

  loginSubmit = event => {
    event.preventDefault();
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <h1>
          Please Login <br />
          To Continue
        </h1>
        <form>
          <>
            <input
              type="text"
              placeholder="username"
              onChange={this.usernameStore}
            />
            <input type="password" placeholder="password" />
          </>
          <input type="submit" onClick={this.loginSubmit} />
        </form>
      </div>
    );
  }
}

export default Login;
