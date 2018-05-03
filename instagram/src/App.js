import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import PostImage from './components/Post-Image/Post-Image';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Header dummyData={dummyData} />
        <PostImage dummyData={dummyData} />
        <PostContainer postList={dummyData} />
        
      </div>
    );
  }
}

export default App;
