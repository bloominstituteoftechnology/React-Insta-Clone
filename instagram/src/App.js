import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super ();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />

        <PostContainer posts={dummyData} />

      </div>
    );
  }
}

export default App;