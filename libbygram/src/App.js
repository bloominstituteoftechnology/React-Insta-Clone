import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: []
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        </header>
        <PostContainer post={this.state.post}/>
      </div>
    );
  }
}

export default App;
