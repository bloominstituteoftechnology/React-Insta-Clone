import React, { Component } from 'react';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
  }
  };

  render() {

  return (
   <div>
     <PostContainer dummyData={this.state.dummyData} ></PostContainer>
   </div>
      );
   }
  }

export default App;
