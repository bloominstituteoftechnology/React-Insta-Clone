import React, { Component } from 'react';
import dummyData from './dummy-data';

import './App.css';

import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';


class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData
    };

  }
  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
