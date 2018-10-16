import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import CommentsSection from './components/CommentsSection/CommentsSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = { instaData : dummyData }
  }

  

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.instaData}/>
        <CommentsSection comments={this.state.instaData}/>
      </div>
    );
  }
}

export default App;
