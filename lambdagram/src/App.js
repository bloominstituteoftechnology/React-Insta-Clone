import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchInput: '',
      commentInput: ''
    }
  }

  handleSearch = (event) => {
    event.preventDefault();
    this.setState({
      searchInput: 'IM A LITTLE TEA POT'
    });
  }

  handleComment = (event) => {
    event.preventDefault();
    this.setState({
      commentInput: 'SHORT AND STOUT'
    });
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar 
          searchInput={this.state.searchInput} 
          handleSearchInput={this.handleInput} 
          handleSearch={this.handleSearch} 
        />
        <PostContainer 
          posts={this.state.instaData} 
          commentInput={this.state.commentInput} 
          handleCommentInput={this.handleComment} 
          handleComment={this.handleInput} 
        />
      </div>
    );
  }
}

export default App;
