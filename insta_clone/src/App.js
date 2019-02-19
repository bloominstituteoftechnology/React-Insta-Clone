import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  static defaultProps = {
    post: []
  };

  state = {
    post: dummyData
  };
  render() {
    return (
      <div className="App">
        <SearchBar />

        <PostContainer posts={this.state.post} />
      </div>
    );
  }
}

export default App;
