import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data.js';

import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
        </header>
          <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
