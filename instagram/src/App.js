import React, { Component } from 'react';
import './App.css';
import dummyData from './data/dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map((post) => <PostContainer post={post} />)}
      </div>
    );
  }
}

export default App;
