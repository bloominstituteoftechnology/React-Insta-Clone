import React, { Component } from 'react';
import './App.css';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-container">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
