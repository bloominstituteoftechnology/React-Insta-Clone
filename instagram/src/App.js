import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import posts from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts });
  }

  searchPosts = (searchString) => {
    let searchedPosts = this.state.posts.filter(post => post.username.includes(searchString));
    this.setState({ posts: searchedPosts });
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPosts} />
        {this.state.posts.map(post => <PostContainer post={post}></PostContainer>)}
      </div>
    );
  }
}

export default App;
