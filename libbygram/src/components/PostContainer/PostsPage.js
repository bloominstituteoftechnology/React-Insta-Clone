import React, { Component } from 'react';
import dummyData from '../../DummyData';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
        post: [],
        filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData })
  }

  searchHandler = event => {
    const post = this.state.post.filter(filtered => {
      if (filtered.username.includes(event.target.value)) {
      return filtered;
      }
    });
    this.setState({ filteredPosts: post })
  }

  render() {
      return (
        <div className="App">
        <header className="App-header">
        <SearchBar 
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchHandler}/>
        </header>
        <div className="app-post">
        <PostContainer post={
          this.state.filteredPosts.length > 0
          ? this.state.filteredPosts
          : this.state.post} 
        />
      </div>
      </div>
      );
  }
}

  export default PostsPage;