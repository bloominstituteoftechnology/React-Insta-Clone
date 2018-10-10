import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      loggedIn: false
    };
  }

  handleInput = e => {
    this.setState({
      username: e.target.value
    });
  };

  login = () => {
    localStorage.setItem("username", this.state.username);
  };

  render() {
    return (
      <div className="login-container">
        <form>
          <h3>username</h3>
          <input type="text" value={this.state.username}/>
          <h3>password</h3>
          <input type="text" />
        </form>
        <button onClick={this.login}>login</button>
      </div>
    );
  }
}

export default Login;
