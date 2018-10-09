import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'

import PostContainer from './Components/PostContainer/PostContainer'
import SearchBar from './Components/SearchBar/SearchBar'


class App extends Component {
  constructor() {
    super()
    this.state = {
      dummyData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar />
          <PostContainer 
            postData={this.state.dummyData}
          />
      </div>
    );
  }
}

export default App;
