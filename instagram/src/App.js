import React, { Component } from 'react';
import './css/index.css';
import './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <header className="App-header">
          <h6 className="App-title">MIKE-instagram</h6>
        </header>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;
