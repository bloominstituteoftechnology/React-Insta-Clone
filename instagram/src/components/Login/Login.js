import React, {Component} from 'react';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
      password: '',
    }
  }

  inputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  toStorage = event => {
    event.preventDefault();
    localStorage.setItem("Username", `${this.state.username}`)
    localStorage.setItem("Password", `${this.state.password}`)
    this.setState({username: "", password: "",})
    window.location.reload();
  }

  render(){
    return (
      <div className="login">Login.js
        <h1>LOGIN PAGE</h1>
        <form
            className="login"
            onSubmit={this.toStorage}>
          <input
            name="username"
            value={this.state.username}
            placeholder="name"
            onChange={this.inputHandler}
            >{this.value}</input>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.inputHandler}>{this.value}</input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
