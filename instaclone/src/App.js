import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <SearchBar />
        </header>
        <PostContainer dummy={this.state.dummy} />
      </div>
    );
  }
};
               
export default App;
