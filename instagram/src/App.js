import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/post-container';
import SearchBar from './components/SearchBar/searchbar';
import './App.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
    
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer dummyData= {this.state.dummyData} />
      </div>
    );
  }
}

export default App;
