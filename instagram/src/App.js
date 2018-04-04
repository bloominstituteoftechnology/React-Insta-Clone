import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [{}]
    }
  }

  render() {
    return (
      <div>
        hey
       <SearchBar data="hey" />
       <PostContainer data="hey" />
       <CommentSection data="hey" />
      </div>
    );
  }

}

export default App;