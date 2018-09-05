import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ''
    };
  }

  search = event => {
    event.preventDefault();
    let posts = [...this.state.posts];
    posts = posts.filter(post => {
      if (post.username === this.state.search) {
        return post;
      } else {
        return null;
      }
    });
    this.setState({ posts });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.setState({
      posts: dummyData
    });
  }
  render() {
    return (
      <div className="PostsPage">
        <SearchBar search={this.search} handleChange={this.handleChange} />
        <PostsContainer
          posts={this.state.posts}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default PostsPage;
