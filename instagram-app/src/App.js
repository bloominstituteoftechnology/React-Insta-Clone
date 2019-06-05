import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './Components/PostContainer/PostsContainer';
import SearchBar from './Components/SearchBar/SearchBarContainer';

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
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts })
  };

  render() {
    return (
      <div className="App">
        <SearchBar 
        searchWord={this.state.searchWord}
        searchPosts={this.searchPostsHandler}
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
