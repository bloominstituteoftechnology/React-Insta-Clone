import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
       <SearchBar />
       <PostContainer postData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
