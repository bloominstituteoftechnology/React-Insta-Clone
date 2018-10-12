import React, { Component } from 'react';
import instagram from"../../images/instagram.png";  
import"./login.css"

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: ''
    }
  }

  handleChange = (e) =>{
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit = () =>{
    localStorage.setItem('user',this.state.username)
    window.location.reload()
  }

  render() { 
    return (
      <div className="container">
        <div className="login-container">
          <img className="logo" src={instagram} alt= "instagram logo" />
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
      </div>
    );
  }
}
 
export default Login;