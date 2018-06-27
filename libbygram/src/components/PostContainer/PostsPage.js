import React, { Component } from 'react';
import dummyData from '../../DummyData';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
        post: []
    };
  }

  componentDidMount() {
    this.setState({ post: dummyData })
  }

  render() {
      return (
        <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <div className="app-post">
        <PostContainer post={this.state.post} 
        />
      </div>
      </div>
      );
  }
}

  export default PostsPage;