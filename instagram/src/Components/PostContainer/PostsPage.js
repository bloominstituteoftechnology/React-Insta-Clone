import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  search = event => {
    const newPosts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ search: newPosts });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="PostsPage">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchPosts={this.search}
        />
        <PostContainer
          posts={
            this.state.search.length > 0 ? this.state.search : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
