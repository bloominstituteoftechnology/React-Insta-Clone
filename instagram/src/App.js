import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostsContainer from './components/PostsContainer/PostsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = { instaData : dummyData }
  }

  render() {
    return (
      <div className="App">
        <PostsContainer posts={this.state.instaData}/>
      </div>
    );
  }
}

export default App;
