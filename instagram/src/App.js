import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  staticUser = {comments: []};
  newComment = 'Add a comment...';
  render() {
    return (
      <div className="App">
        <header>
          <h1>Instagram</h1>
        </header>
        <SearchBar />
        <PostContainer dd={dummyData} />
        <form>
          <input type="text" value={this.newComment}/><button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
