import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/CommentSection/CommentSection';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  handleInput = e =  
  componentDidMount() {
    posts => this.setState({ posts: posts.PostContainer })
  };
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
