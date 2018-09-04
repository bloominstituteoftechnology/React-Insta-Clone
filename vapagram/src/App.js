import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">Header</h1>
        <SearchBar />
        <PostContainer posts={this.state.data} />
      </div>
    );
  }
}
dummyData.PropType = {
  username: PropTypes.array.isRequired
};
export default App;
