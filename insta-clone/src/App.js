import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import dummyData from './dummy-data'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      postData: dummyData,

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBar />
        <PostContainer post={this.state.postData} />


        </header>
      </div>
    );
  }
}

export default App;
