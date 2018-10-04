import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data'

class App extends Component {

  constructor() {
    super();
    this.state = {
      dummyData: [dummyData]
    };
}

  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
