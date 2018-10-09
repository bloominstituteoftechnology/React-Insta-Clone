import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/PostContainer/Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <Posts dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;