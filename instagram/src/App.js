import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data : dummyData
    };
  }

  searchBar = (
    <div><input>Search</input></div>
  )
  

  render() {
    return (
      <div>
        <SearchBar searchBar={searchBar}/>
        {/* <PostContainer posts = {this.state.filter(posts !== posts.comment)}/> */}
      </div>
    )
  }
}

dummyData.propTypes={
    
}
export default App;
