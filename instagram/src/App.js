import React, { Component } from 'react';
import PostsPage from '../components/PostContainer/PostsPage';

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

export default App;
