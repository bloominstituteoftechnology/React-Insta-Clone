import React, { Component } from 'react';
import dummyData from '../../utilities/dummy_data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import Authenticate from '../Authentication/Authenticate';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      searchQuery: ''
    }
  }

  onSearch(searchQuery) {
    this.setState({
      ...this.state,
      searchQuery
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSearch={(searchQuery) => this.onSearch(searchQuery)} />
        <PostContainer searchQuery={this.state.searchQuery} posts={this.state.posts} />
      </div>
    );
  }
}

export default Authenticate(PostPage);
