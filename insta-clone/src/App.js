import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/Posts/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }
  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
          <SearchBar />
          <PostContainer values= {this.state.data} />
      </div>
    );
  }
}

export default App;
