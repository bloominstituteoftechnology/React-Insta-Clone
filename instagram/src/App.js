import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
          </header>
          <SearchBar headerImage={logo} />
          <PostContainer feed={dummyData} />
      </div>
    );
  }
}

export default App;