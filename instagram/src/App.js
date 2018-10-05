import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostContainer from './PostContainer';

import SearchBar from './SearchBar'
class App extends Component {

  constructor() {
    super();
    this.state = {
      comments:[],
      search: '🔍 Search',
    } 
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState (
      {search:value}
    );
    }


  render() {
    return (
      <div className="App">
      <SearchBar value={this.state.search} inputHandler={this.inputHandler} />
      <PostContainer />
      </div>
    );
  }
}

export default App;
