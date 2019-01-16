import React, { Component } from 'react';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: '',   
        loggedIn: props.loggedIn,
    }
  }
   handleChanges = ev => {
        this.setState({ [ev.target.name]: ev.target.value });
    }
    loginSubmit = e => {
        // e.preventDefault();
        if(this.state.username && this.state.password){
            localStorage.setItem("username", `${this.state.username}`);
            localStorage.setItem("password", `${this.state.password}`);
        }

     }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.loginSubmit}>
            Username: <input 
            type="text"
            onChange={this.handleChanges}
            name="username"
            />
            Password: <input
            type="text"
            onChange={this.handleChanges}
            name="password"/>
            <button onClick={this.props.loginSubmit}>Login</button>
        </form>
      </div>
    );
  }
}


export default Login;