import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';

class App extends Component {
  constructor () {
    super();
    this.state = {

    }
  }
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer containerProps= {dummyData}/>
      </div>
    );
  }
}

export default App;
