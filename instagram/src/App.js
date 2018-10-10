import React, { Component } from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      loggedIn: false
    };
  }

  usernameHandler = event => {
    this.setState({ username: event.target.value });
  };

  passwordHandler = event => {
    this.setState({ password: event.target.value });
  };

  loginSubmit = event => {
    event.preventDefault();

    const loginCredentials = { username: 'admin', password: 'admin123' };
    const tryUsername = this.state.username;
    const tryPassword = this.state.password;

    if (loginCredentials.username === tryUsername) {
      if (loginCredentials.password === tryPassword) {
        localStorage.setItem('username', tryUsername);
        window.location.reload();
        this.setState({ loggedIn: true });
      }
    } else {
      this.setState({ loggedIn: false });
    }

  }

  render() {
    return (
      <div className="App">
        <Login
          username={this.state.username}
          usernameHandler={this.usernameHandler}

          password={this.state.password}
          passwordHandler={this.passwordHandler}

          loginSubmit={this.loginSubmit}
        />
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
