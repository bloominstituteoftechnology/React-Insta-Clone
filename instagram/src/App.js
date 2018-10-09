import React, { Component } from 'react';
import './App.css';
import DummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer />
          
        </header>
      </div>
    );
  }
}

export default App;
