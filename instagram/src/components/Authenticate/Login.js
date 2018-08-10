import React, { Component } from "react";
import './login.css'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    console.log("event", event)
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLoginSubmit = event => {
    const user = this.state.username;
    localStorage.setItem("user", user);
     window.location.reload();
  };

  render() {
    return (
      
       
     <div className="login">
          <input type="text" placeholder="User Name" name="username"
            value={this.state.username} onChange={this.handleInputChange}
          />
      
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          <br />
          <button  onClick={this.handleLoginSubmit}>
            Log In
          </button>
       
      </div>
    );
  }
}

export default Login;