import React from 'react';
import './Login.css';

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLoginSubmit = e => {
  const user = this.state.username;
  localStorage.setItem('user', user);
  window.location.reload();
};

  render(){
    return(
      <div className="login-container">
        <h1 className="login-title"> Instagram </h1>
        <form>
          <div className="login-label">
            <label> Username: </label><br />
          </div>
          <input
            className="login-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange} /><br />
          <div className="login-label">
          <label> Password: </label><br />
          </div>
          <input
            className="login-input"
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange} /><br />
          <button
            className="login-submit"
            type="subimt"
            onClick={this.handleLoginSubmit}> Submit </button>
        </form>
      </div>
    )
  }
}

export default Login;
