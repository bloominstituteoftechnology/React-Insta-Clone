import React, { Component } from 'react';
import SearchBarContainer from './components/Search/SearchBarContainer';
import PostContainer from './components/Post/PostContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
