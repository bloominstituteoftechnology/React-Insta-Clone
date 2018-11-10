import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <Posts />
        </header>
      </div>
    );
  }
}

export default App;
