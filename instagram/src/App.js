import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from '../src/components/SearchBar/SearchBar';
import PostContainer from '../src/components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        <PostContainer data={this.state.dummyData[0]} />
        <PostContainer data={this.state.dummyData[1]} />
        <PostContainer data={this.state.dummyData[2]} />

      </div>
    )
  }

}

export default App;
