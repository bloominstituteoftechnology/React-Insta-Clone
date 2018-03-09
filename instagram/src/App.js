import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import dummyData from './dummy-data.js';

class App extends Component {
  render() {
    return (
      <div className="container-fluid App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchBar headerImage={logo} />
        <PostContainer feed={dummyData}/>
      </div>
    );
  }
}

export default App;
