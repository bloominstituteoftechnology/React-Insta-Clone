// import React, {Component} from 'react';
// const Login= prop =>{
//     return(
//         <div>
//             <form>
//                 <input className="login-user" type='text' placeholder='Username'></input>
//                 <input className="login-pwd" type='text' placeholder='Password'></input>
//             </form>
//         </div>
//     )

// }
// export default Login;
import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form className="login-form">
          <h3>Welcome to React Insta Clone</h3>
          <div>Please Login</div>
          
            <input
              type="text"
              placeholder="User Name"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />


            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <br />
            <button
              color="success"
              size="large"
              onClick={this.handleLoginSubmit}
            >
              Log In
            </button>
        </form>
      </div>
    );
  }
}

export default Login;
