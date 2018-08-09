import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      credentials: localStorage.getItem("creditionals")
    };
  }


  // handleCreds = credentials => {
  //   if (!credentials && localStorage.getItem("credentials")) {
  //     this.setState({credentials})
  //   }
  // };


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const authKey = `${this.state.username} logged in`;
    localStorage.setItem("credentials", authKey);
    this.setState({username: "", password: ""});

  };

  render() {
    return (
      <div className="Login">
        <h1>Insta-Clone</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="username"
            placeholder="Enter Username"
            value={this.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={this.password}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;

// value={this.state.username}
// value={this.state.password}
