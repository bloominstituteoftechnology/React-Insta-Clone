import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SearchBar />
      
        <h1>Hello React Thingy</h1>
      </div>
    );
  }
}

dummyData.propTypes = {
  dummyData: PropTypes.array
};

export default App;
