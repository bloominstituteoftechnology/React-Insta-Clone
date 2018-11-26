import React, { Component } from 'react';
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer from "../src/components/PostContainer/PostContainer";
import CommentSection from "../src/components/CommentSection/CommentSection";
import dummyData from "../src/dummy-data";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {    
    return (
      <div className="App">
        My instagram clone
        <SearchBar />
        <PostContainer posts={this.state.posts} />
        <CommentSection />        
      </div>
    );
  }
}

export default App;
