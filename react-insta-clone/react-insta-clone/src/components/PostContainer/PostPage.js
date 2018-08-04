import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  };

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  }

  render() {
    return(
      <div className='App'>
        <SearchBar
        searchTerm={this.state.searchTerm}
        searchPosts={this.searchPostHandler}
         />
        <PostContainer
        posts={
          this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts
        } />
      </div>
    )
  }

}
export default PostPage;