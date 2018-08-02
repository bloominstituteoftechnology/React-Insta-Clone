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

  usernameHandler = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passwordHandler = event => {
    this.setState({
      password: event.target.value,
    })
  }

  toStorage = event => {
    event.preventDefault();
    console.log(event.target.value);
    console.log("toStorage called")
    localStorage.setItem("Username", `${this.state.username}`)
    localStorage.setItem("Password", `${this.state.password}`)
    this.setState({
      username: "",
      password: "",
    })

    // let userCheck = '';
    // userCheck = localStorage.getItem('username');
    // if (userCheck === null) {
    //   console.log("usernameEmpty");
    // } else {
    //   console.log("usernameLogged:", localStorage.getItem('username'))
    //   this.setState({
    //     loggedIn: true,
    //   })
    // }
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
            value={this.state.username}
            placeholder="name"
            onChange={this.usernameHandler}
            >{this.value}</input>
          <input
            value={this.state.password}
            placeholder="password"
            onChange={this.passwordHandler}>{this.value}</input>
          <button
            >Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
