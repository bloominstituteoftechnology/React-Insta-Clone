import React, { Component } from 'react';
import "./LoginPage.css";
import styled from 'styled-components';
/* import PropTypes from 'prop-types'; */
import { Input } from 'reactstrap';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
        <h3 className="title">Insta-React Clone</h3>
        
        <form onSubmit={this.handleSubmit}>>
          <div className="form-group">
            <Input type="text" id="username" value={this.state.username} name='username' className="form-control" placeholder="Enter Username" onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <Input type="password" id="password" className="form-control"  placeholder="Enter Password" onChange={this.handleInputChange} />
          </div>
          <button type="submit" className="btn btn-primary" id="logon" onClick={this.handleLoginSubmit}>Log In</button>
        </form>
      </div>

    );
  }
}

export default LoginPage;