import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/PostContainer.css';
import './components/CommentSection/CommentSection.css';
import PostsPage from './components/PostContainer/PostsPage';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchPosts: ""
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    return (
      <div>
        PostPage
        <PostsPage 
        />
      </div>
    );
  }
}

export default App;
