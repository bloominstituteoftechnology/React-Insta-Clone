import React, { Component } from 'react';
import "./LoginPage.css";
import PropTypes from 'prop-types';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    const password = this.state.password;
    localStorage.setItem('user', user);
    localStorage.setItem('password', password);
    window.location.reload();
  };


  render() {
    return (
      <div className="login">
        <form
          className="loginForm"
          onSubmit={this.handleSubmit}>
          <h3 className="title">Insta-React Clone</h3>
          <input
            className="username"
            type="text"
            name='username'
            placeholder="username"
            value={this.state.username}
            onChange={this.handleInputChange} />


          <input
            className="password"
            type="password"
            name='password'
            placeholder="password"
            value={this.state.password}
            onChange={this.handleInputChange} />

          <input
            className="submitBtn"
            type="button"
            value="Log In"
            onClick={this.handleLoginSubmit} />
        </form>
      </div>
    );
  }
}


export default LoginPage;