import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {dummyData};  
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
