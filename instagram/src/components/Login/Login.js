import React, { Component } from "react";
import "./App.css";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username : "",
        password : "",
    };
  }


  render() {
    return(
        <div>
                <form>
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}


export default Login;
