import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    }
  }
  render() {
    return (
      <div className="App">
        <div className="search-container">
        <SearchBar />
        </div>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
