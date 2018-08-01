import React, { Component } from 'react';
import './App.css';
import dummyData from '../src/dummy-data';
import PostsPage from './components/PostContainer/PostsPage';

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

  render() {
    return (
      <div className="App">
        <PostsPage 
        posts={this.state.posts}
        />
      </div>
    );
  }
}

export default App;
