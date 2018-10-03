import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import CommentSection from './CommentSection/CommentSection'
class App extends Component {
  render() {

    return (
      <CommentSection dummyData={dummyData} />

    );
  }
}

export default App;
