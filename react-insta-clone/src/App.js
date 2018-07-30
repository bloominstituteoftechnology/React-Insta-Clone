import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar/SearchBar';
import CommentSection from './components/CommentSection/CommentSection';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
          <SearchBar />
          <PostContainer posts={this.state.posts} /> 
      </div>
    );
  }
}

export default App;
