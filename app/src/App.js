import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data';

class App extends Component {
  state = dummyData;
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Cool Instagram</h1>
      </header>
        <SearchBar />
        {
        this.state.map(post1 => {
          return <PostContainer
            post={post1}
            />;
          })
        }
      </div>
    );
  }
}

export default App;
