import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post-container'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
      <PostContainer post={this.state.data} />
      </div>
    );
  }
}

export default App;
