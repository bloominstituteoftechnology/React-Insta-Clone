import React, { Component } from 'react';
import PostsPage from './components/PostsContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import Login from './components/Login/Login';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App, Login);
