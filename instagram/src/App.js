import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends Component {
  state = {
    posts : dummyData
  }
  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
      <SearchBar />
      <div className="posts">
      {this.state.posts.map(post => <PostContainer post = {post} />)}
      </div>
      </div>
    );
  }
}

export default App;
