import React, { Component } from 'react'

export default class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : '',
    }
  }

  userChangeHandler = e => {
    this.setState({username: e.target.value})
  }

  passChangeHandler = e => {
    this.setState({password: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem('username', user);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} >
          <h2>Log in</h2>
          <input onChange={this.userChangeHandler} placeHolder='Username' value={this.state.username} />
          <input onChange={this.passChangeHandler} placeHolder='Password' value={this.state.password}/>
          <button onClick={this.submitHandler} >Log In</button>
        </form>
      </div>
    )
  }
}
