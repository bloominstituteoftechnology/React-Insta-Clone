import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import dummyData from './dummy-data';
import logo from './logo.svg';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

import './App.css';

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
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          <PostContainer />
        </div>
      </div>
    );
  }
}

export default App;
