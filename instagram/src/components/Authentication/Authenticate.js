import React, { Component } from 'react';
import Login from '../Login/Login';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorizedApp: props.app,
      loggedIn: false,
      username: '',
      password: ''
    }
  }

  onUsernameChange = e => {
    this.setState({ username: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmitLogin = e => {
    e.preventDefault();
    if (this.state.username.trim() !== '') {
      localStorage.setItem('username', this.state.username);
      window.location.reload(true);
    } else {
      alert('OMG enter a username already!');
    }
  };

  componentDidMount() {
    if (localStorage.getItem('username')) {
      this.setState({loggedIn: true});
    }
  }

  render() {
    if (this.state.loggedIn) {
      const AuthorizedApp = this.state.authorizedApp;
      return <AuthorizedApp />;
    } else {
      return <Login onUsernameChange={this.onUsernameChange} onPasswordChange={this.onPasswordChange} onSubmitLogin={this.onSubmitLogin} username={this.username} password={this.password} />;
    }
  }
}

export default Authenticate;