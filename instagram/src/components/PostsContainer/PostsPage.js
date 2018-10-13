import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBarContainer';
import PostsContainer from './PostsContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  searchPosts = (event) => {
    event.preventDefault();

    let filteredPosts = this.state.posts;
    filteredPosts = filteredPosts.filter(post => {
      return post.username.toLowerCase() === event.target.value
    });

    this.setState({ filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts} />
        <PostsContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;