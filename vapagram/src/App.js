import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Vapegram</h1>
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}

export default App;
