import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  state = {
    card: dummyData
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.card} />
      </div>
    );
  }
}

export default App;
