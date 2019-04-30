import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './components/dummyData';
import './App.css';
import InstaFeed from './components/InstaFeed/InstaFeed';

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
        <InstaFeed dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;