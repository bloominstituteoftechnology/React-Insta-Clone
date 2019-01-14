import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import { CommentSection } from './components/CommentSection/CommentSection';
import { PostContainer } from './components/PostContainer/PostContainer';
import { SearchBar } from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData : dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer />
      <CommentSection />
      </div>
    )};
}

export default App;
