import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchContainer from './components/SearchBar/SeachContainer';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
constructor() {
  super()
  this.state = {
    data: dummyData
  }
}

  render() {
    return (
      <div className="App">
      <SearchContainer />
      <PostContainer user={this.state.data} />
      </div>
    );
  }
}

export default App;
