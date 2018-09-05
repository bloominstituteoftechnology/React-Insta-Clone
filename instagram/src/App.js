import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from './components/PostsContainer/PostPage';
import Authenticate from './components/Authenticate/Authenticate';

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
    <div>
        <Authenticate />
        <PostPage />
      </div>
      
    );
  }
}

export default App;
