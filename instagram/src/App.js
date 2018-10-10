import React, { Component } from 'react';
import './App.css';

import PostsPage from './components/PostContainer/PostsPage';
import dummyData from './dummy-data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  filterPosts = e => {
    const filteredPosts = dummyData.filter(post =>
      post.username.includes(e.target.value));
    this.setState({ posts: filteredPosts });
  }

  render() {
    return (
      <div className="app-container">
        <PostsPage onChange={this.filterPosts} posts={this.state.posts}/>
      </div>
    );
  }
}
