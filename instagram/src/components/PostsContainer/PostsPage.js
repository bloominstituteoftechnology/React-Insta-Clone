import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 500);
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(post =>
      (post.username.includes(e.target.value)) 
    );
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
