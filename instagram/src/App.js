import React, { Component } from 'react';
import "./App.css";
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

// Searchbar and PostContainer are children of App Component
// App Component holds the state of the dummyData
// if this.setState is called then 
// for search add  this to state object here.....filteredPosts: []

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData 
    };
  }
 
  render() {
    return (
      <div>
      <SearchBar />
      <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
