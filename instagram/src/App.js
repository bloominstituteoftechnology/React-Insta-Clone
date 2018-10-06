import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

import dummyData from './dummy-data';

class App extends Component {

  state = {
    posts: [],
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ posts: dummyData });
    }, 500);
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.posts.map(post => (
          <PostContainer key={post.timestamp} post={post} />
        ))}
      </div>
    );
  }
}

export default App;
