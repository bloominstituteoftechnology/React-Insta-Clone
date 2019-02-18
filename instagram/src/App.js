import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Header from './components/Header/Header';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  static defaultProps = {
    posts: []
  }

  state = {
    posts: dummyData
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <Header />
        <PostContainer posts={posts} />
      </div>
    );
  }
}

export default App;
