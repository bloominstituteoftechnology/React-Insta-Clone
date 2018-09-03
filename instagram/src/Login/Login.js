import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    
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
    const currentUser = this.state.username;
    localStorage.setItem('username', currentUser);
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
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.handleChange}>Log In</button>
        </form>
      </div>
    );
  }
}

export default Login;

// value={this.state.username}
// value={this.state.password}
