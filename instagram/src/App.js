import React, { Component } from 'react';
import postData from './application-data';
import Post from './Post.js';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: '',
    };
    this.searchPosts = this.searchPosts.bind(this);
  }
  componentDidMount() {
    this.setState({ posts: postData, });
  }
  searchPosts(event) {
    this.setState({ search: event.target.value, });
  }
  render() {
    return (
      <div className="App">
        <nav>
        <Search search={ this.state.search } searchPosts={ this.searchPosts } />
        </nav>
        {this.state.posts.map(post => {
          if (post.username.indexOf( this.state.search ) !== -1) {
            return <Post post={ post } />
          }
        })}
      </div>
    );
  }
}

export default App;
