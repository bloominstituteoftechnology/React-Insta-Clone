import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/Search.js';
import PostList from './components/PostContainer/PostList.js';
import DummyData from '../src/dummy-data.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummydata: DummyData,
    }
  }

  

  render() {
    return (
      <div className="App">
        <Search className="search-bar"/>
        <PostList postData={this.state.dummydata} className="post-list-container"/>
      </div>
    );
  }
}

export default App;
