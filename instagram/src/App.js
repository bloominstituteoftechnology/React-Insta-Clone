import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <PostsPage />
    );
  }
}

export default App;
