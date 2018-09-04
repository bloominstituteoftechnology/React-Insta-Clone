import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './instagram_assets/dummy-data.js';
import Timeline from './components/Timeline/Timeline.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      posts: dummyData
    };
  }

  

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Timeline posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
