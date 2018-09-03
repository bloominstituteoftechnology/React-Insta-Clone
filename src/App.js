import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js'

class App extends Component {
  constructor(props){
    super();
    this.state = dummyData;

  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer userData = {this.state}/>
      </div>
    );
  }
}

export default App;
