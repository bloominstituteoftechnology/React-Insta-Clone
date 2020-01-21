import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post-container';
import SearchBar from './components/SearchBar/searchbar';
import Comments from './components/CommentSection/comments';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <h1>Instagram Clone</h1>
      <SearchBar />
      <PostContainer dummyData = {this.state.dummyData} />
      </div>
    );
  }
}

export default App;
