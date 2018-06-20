import React, { Component } from 'react';
import PostsPage from './components/PostContainer/PostsPage'
import './App.css';
import data from './dummy-data'

class App extends Component {
  render() {
    return (
      <PostsPage />
    );
  }
}

export default App;
