import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostPage from './instagram/components/PostContainer/PostPage';
import Authorize from './instagram/components/Authorize/Authorize';

class App extends Component {
  constructor() {
    super()

    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <PostPage />
    );
  }
}

export default Authorize(App);
