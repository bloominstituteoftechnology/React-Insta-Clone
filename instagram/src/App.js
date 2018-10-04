import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from '../src/components/SearchBar/SearchBar.js';
import PostContainerList from '../src/components/PostContainerList/PostContainerList.js'


class App extends Component {

  constructor(){
    super();
    this.state = {
      postData: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Instagram App</h1>
        <SearchBar />
        <PostContainerList />
      </div>
    );
  }
}

export default App;
