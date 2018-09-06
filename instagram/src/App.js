import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/postspage';
import Authenticate from './components/Authentication/authenticate';


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

export default Authenticate(App);
