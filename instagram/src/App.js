import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummyData';
import PostContainer from './components/PostContainer';
import CommentSection from './components/PostContainer';
import SearchBar from './components/SearchBarContainer';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
    };
  }
  render() {
    return (
      <div className="App">
        {/* SearchBar Component */}
        {/* PostContainer Component */}
        {/* CommentSection Component */}
      </div>
    );
  }
}

export default App;
