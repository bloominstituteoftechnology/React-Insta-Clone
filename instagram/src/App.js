import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
// import CommentSection from './components/CommentSection/CommentSection'
// import PostContainer from './components/PostContainer/PostContainer'
// import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  render() {
    // console.log(dummyData);
    // console.log(JSON.stringify(dummyData));
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
