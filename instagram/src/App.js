import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostPage from './components/post/PostPage'
import Authenticate from './components/Authenticate/Authenticate';


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
        <PostPage postPage = {this.state} search ={this.searchPostsHandler} />
      </div>
    );
  }
}

export default Authenticate(App);
