import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
  	return (
  	    <div className = 'App'>
  	      <SearchBar searchTerm = {this.state.searchTerm} searchPosts = {this.searchPostsHandler} />
  	      <PostContainer posts = {this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.posts} />
        </div>
    );
  }
}

export default App;
