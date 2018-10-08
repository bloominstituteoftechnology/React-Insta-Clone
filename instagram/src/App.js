import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';

import SearchBar from './components/SearchBar/SearchBar';
import PostsContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
    };
  }
  
  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = event => {
    const posts = this.state.posts.filter(param => {
      if (param.username.includes(event.target.value)) {
        return param;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar 
        searchPosts={this.searchPostsHandler} 
        />
        <PostsContainer 
        posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} 
        />
      </div>
    );
  }
}

export default App;
