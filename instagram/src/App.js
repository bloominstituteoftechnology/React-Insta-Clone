import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {name: dummyData};
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <SearchBar />
        <PostContainer name={this.state.name} />
      </div>
    );
  }
}

export default App;
