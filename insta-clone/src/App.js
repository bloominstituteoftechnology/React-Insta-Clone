import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './PostContainer/PostContainer';
class App extends Component {
  render() {

    return (
      <PostContainer dummyData={dummyData} />

    );
  }
}

export default App;
