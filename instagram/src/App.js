import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './components/Authentication/Authenticate';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return <PostsPage />;
  }
}

export default Authenticate(App);
