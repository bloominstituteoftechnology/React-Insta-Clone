import React, { Component } from 'react';
import SearchBar from './components/SearchBar/searchBar';
import PostContainer from './components/PostContainer/postContainer';
import CommentSection from './components/CommentSection/commentSection';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = dummyData;
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer />
        <CommentSection />
      </div>
    );
  }
}

export default App;
