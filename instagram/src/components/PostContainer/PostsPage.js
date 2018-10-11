import React, { Component } from 'react';
import dummyData from '../../dummy-data.js';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

export class PostsPage extends Component {
  state = {
    posts: dummyData,
    searchQuery: '',
    filteredPosts: [],
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  changeHandler = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  search = (event) => {
    event.preventDefault();
    this.setState({
      filteredPosts: this.state.posts.filter(
        (post) => post.username === this.state.searchQuery
      ),
    });
  };

  addLike = (timestamp) => {
    this.setState({
      posts: this.state.posts.map((post) => {
        if (post.timestamp === timestamp) {
          post.likes += 1;
        }
        return post;
      }),
    });
  };

  logout = () => {
    localStorage.removeItem('username');
    window.location.reload();
  };

  render() {
    const posts =
      this.state.filteredPosts.length === 0
        ? this.state.posts
        : this.state.filteredPosts;
    return (
      <div>
        <SearchBar
          search={this.search}
          changeHandler={this.changeHandler}
          logout={this.logout}
          text={this.state.searchQuery}
        />
        {posts.map((post) => {
          return (
            <PostContainer
              post={post}
              addLike={this.addLike}
              key={post.timestamp}
            />
          );
        })}
      </div>
    );
  }
}

export default PostsPage;
