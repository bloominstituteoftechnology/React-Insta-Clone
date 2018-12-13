import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor( props)
  {
    super( props )
    this.state = 
    {
      array1: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBar />
        <PostContainer objects = { this.state.array1 }/>
        
      </div>
    );
  }
}

export default App;