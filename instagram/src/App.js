import React, { Component } from 'react';

//Component Import
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';

//Import data from Js File

import dummyData from './dummy-data';

//css
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div>Test
      <SearchBar />
        <PostContainer />

      </div>
    );
  }
}

export default App;
