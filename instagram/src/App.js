import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  
  constructor() {
    super();

    this.state = {
      posts: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="container">
          <SearchBar />
        </nav>
        <div className="body-wrapper">
          <PostContainer posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default App;
