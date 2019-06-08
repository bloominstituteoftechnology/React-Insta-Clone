import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBarContainer';

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
    if (p.p.username.includes(e.target.value)) {
      return p;
    }
  });
  this.setState({ filteredPosts: posts });
};
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.setState.searchTerm}
          searchposts={this.searchPostsHandler}
        />
        <PostsContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;