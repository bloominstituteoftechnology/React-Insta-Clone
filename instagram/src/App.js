import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostList from './components/PostContainer/PostList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,

      inputText: 'Search'
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar inputText={this.state.inputText} />
        <PostList postData={this.state.posts} />
      </div>
    );
  }
}

export default App;
