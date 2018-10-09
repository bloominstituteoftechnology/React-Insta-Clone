import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password:''
    }
  }

  handleChange = (e) =>{
    this.setState({
     [e.target.name]: e.target.value
    })
  }

  handleSubmit = () =>{
    localStorage.setItem('user',this.state.username)
    window.location.reload()
  }

  render() { 
    return (
      <div className="Login-container">
        <input 
        name="username"
        type="text" 
        placeholder="Username" 
        onChange={this.handleChange}
        value={this.state.username}
        />
        <input 
        name="password" 
        type="password" 
        placeholder="Password" 
        onChange={this.handleChange}
        value={this.state.password}
        />
        <div className="btn login" onClick={this.handleSubmit}>Login</div>
      </div>
    );
  }
}
 
export default Login;