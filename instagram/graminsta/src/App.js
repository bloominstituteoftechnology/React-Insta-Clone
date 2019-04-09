import React, { Component } from 'react';
import Searchbar from "./Components/Searchbar.js"
import PostContainer from "./Components/PostContainer.js"
import CommentSection from "./Components/CommentSection.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
