import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import commentSection from './Components/CommentSection';
import postContainter from './Components/PostContainer';
import searchBar from './Components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
