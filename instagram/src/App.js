import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './Components/CommentSection/CommentSection';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mykey: "myvalue"
    }
  }

  render() {
    return (
      <div>
        <CommentSection />
        <PostContainer />
        <SearchBar />
      </div>

    );
  }
}

export default App;
