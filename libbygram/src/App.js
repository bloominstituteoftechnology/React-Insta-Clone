import React, { Component } from 'react';
import './App.css';
import dummyData from './DummyData';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: [],
      thumbnailUrl: "",
      username: "",
      imageUrl: "",
      likes: 0,
      timestamp: "",
      comments: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <div className="app-post">
        <PostContainer />
        {/* this was in postcontainer above post={this.state.post} */}
      </div>
      </div>
    );
  }
}

export default App;
