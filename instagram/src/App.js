import React, { Component } from 'react';
import SearchBar from "../src/components/SearchBar/SearchBar";
import PostContainer, {  } from "../src/components/PostContainer/PostContainer";
import CommentSection from "../src/components/CommentSection/CommentSection";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My instagram clone
        <SearchBar />
        <PostContainer />
        <CommentSection />        
      </div>
    );
  }
}

export default App;
