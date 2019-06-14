import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostsContainer from './PostsContainer';
import SearchBar from '../SearchBar/SearchBarContainer';

class PostsPage extends Component {
    constructor() {
      super();
      this.state = {
        posts: [],
        data: [],
        search: '',
        postsDuplicate: dummyData
      };
    }
    componentDidMount() {
      this.setState({ posts: dummyData });
    }
  
    searchHandler = e => {
      this.setState({ search: e.target.value });
    };
  
    find = e => {
      e.preventDefault();
      e.stopPropagation();
  
      const found = this.state.posts.filter(post => {
        if (
          post.username.toLowerCase().includes(this.state.search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      this.setState({ posts: found });
      if (this.state.search == '') {
        this.setState({ posts: this.state.postsDuplicate });
      }
    };
  
    render() {
      return (
        <div className="App">
          <SearchBar
            search={this.state.search}
            change={this.searchHandler}
            find={this.find}
          />
          <PostsContainer posts={this.state.posts} />
        </div>
      );
    }
  }
  
  export default PostsPage;