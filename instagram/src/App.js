import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainerComponents/PostContainer';
import SearchBar from './components/SearchBarComponents/SearchBar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer post={this.state.post} />
      </div>
    );
  }
}

export default App;
