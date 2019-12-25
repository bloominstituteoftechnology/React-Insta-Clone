import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBarContainer';
import PostsContainer from './PostsContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
      searchInput: ''
    };
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  searchHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  searchPosts = () => {
    let filteredPosts = this.state.posts;
    filteredPosts = filteredPosts.filter(post => {
      return post.username.toLowerCase().includes(this.state.searchInput) ? post : null;
    });

    this.setState({ filteredPosts });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPosts}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput}
        />
        <PostsContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;