import React, { Component } from 'react';
import dummyData from '../../dummy-data';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export default class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterPosts = e => {
    const filteredPosts = dummyData.filter(post =>
      post.username.includes(e.target.value));
    this.setState({ posts: filteredPosts });
  }

  render() {
    return (
      <div className="app-container">
        <SearchBar onChange={this.filterPosts} />
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}
