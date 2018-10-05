import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchHeader from './components/SearchBar/SearchHeader.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchHeader />
        <PostContainer dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
