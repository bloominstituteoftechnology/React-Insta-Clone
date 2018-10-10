import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import PostsContainer from './components/PostContainer/PostsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filterPost: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostHandler = event => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    })
    this.setState({filterPost: posts});
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer 
          searchPost={this.searchPostHandler}
        />
        <PostsContainer 
          posts={this.state.filterPost.length > 0 
            ? this.state.filterPost
            : this.state.posts} 
        />
      </div>
    );
  }
}

export default App;
