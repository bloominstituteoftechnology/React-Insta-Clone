import React, { Component } from 'react';
import './App.scss';
import dummyData from './dummyData'
import SearchBar from './components/SearchBar/SearchBar'
import CommentSection from "./components/CommentSection/CommentSection";
import PostContainer from "./components/PostContainer/PostContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostContainer/>
      </div>
    );
  }
}

export default App;
