import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      search: '',
      posts: dummyData
    }
  }

  postElements = () => {
    return this.state.posts.map(post => {
      return <PostContainer {...post}/>
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.postElements()}
      </div>
    );
  }
}

export default App;
