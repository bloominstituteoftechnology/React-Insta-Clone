import React from 'react';

class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

    handleChange = e =>{
    this.setState({
      [e.target.className] : e.target.value
    })
  }

    login = e => {
      if (this.state.username){
        localStorage.setItem(this.state.username, this.state.password)
        this.setState({
          username:"", password:""
        })} else {alert('Please enter a username & password')
        }
      window.location.reload()
    }
  render() {
    return(
      <form onSubmit={this.login}>
        <input
          type="text"
          value={this.state.username}
          placeholder="username"
          className="username"
          onChange={this.handleChange} ></input>
        <input
          type="text"
          value={this.state.password}
          placeholder="password"
          className="password"
          onChange={this.handleChange}></input>
          <button>Submit</button>
      </form>
    )
  }
}

export default Login
