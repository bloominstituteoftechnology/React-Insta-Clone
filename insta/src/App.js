import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);
library.add(faComment);


class App extends Component {
  constructor() {
    super();
    this.state = {dummyData};
  }
  render() {
    return (
      <>
        <PostContainer posts={this.state.dummyData}/>
      </>
    );
  }
}

export default App;
