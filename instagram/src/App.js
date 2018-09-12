import React, { Component } from 'react';
import PostsPage from './Components/PostContainer/PostsPage';
import Authenticate from './Components/Authentication/Authenticate';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
