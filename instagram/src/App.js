import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainerPostContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

export default App;
