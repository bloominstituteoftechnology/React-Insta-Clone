import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/post/postContainer';
import SearchBar from './components/search/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      filteredPost: []
    };
  }
  componentDidMount() {
    this.setState({ post: dummyData })
  };
  searchPostsHandler = event => {
    const posts = this.state.post.filter(p => {
      if (p.username.includes(event.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPost: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          searchPost={this.searchPostsHandler}
        />
        <PostContainer posts={this.state.filteredPost.length > 0
              ? this.state.filteredPost
              : this.state.post
          } />
      </div>
    );
  }
}

export default App;
