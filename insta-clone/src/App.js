import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import Post from './Components/PostContainer/Post';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';




class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      filteredPost: []
    };
  }
  componentDidMount() {
    this.setState({ post: dummyData });
  }
  searchPostsHandler = e => {
    const post = this.state.post.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPost: post });
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          post={
            this.state.filteredPost.length > 0
              ? this.state.filteredPost
              : this.state.post
          }
        />
      </div>
    );
  }
}

export default App;