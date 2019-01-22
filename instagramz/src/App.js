import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer />
      
        <h1>Hello React Thingy</h1>
      </div>
    );
  }
}

dummyData.propTypes = {
  dummyData: PropTypes.array
};

export default App;
