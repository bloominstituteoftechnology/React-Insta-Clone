import React from "react";
import "./Login.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogIn();
  };

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit}>
        <p>username :</p>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <p>password :</p>
        <input type="text" name="password" onChange={this.handleChange} />
        <input type="submit" value="log in" />
      </form>
    );
  }
}

export default Login;
