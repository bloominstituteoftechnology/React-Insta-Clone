import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = dummyData;
  }
  render() {
    return (
      <>
        <PostContainer comments={this.state}/>
      </>
    );
  }
}

export default App;
