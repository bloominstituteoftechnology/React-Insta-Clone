import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor(){
      super();
      this.state={data:dummyData}
  }
  render() {
    return (
      <div>
        <PostContainer />
        <SearchBar />
        <CommentSection />
      </div>
    );
  }
}

export default App;
