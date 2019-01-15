import React, { Component } from 'react';

import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer.js';
import PostContainer from './components/PostComponents/PostContainer.js';

import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="ig-clone">
        <HeaderContainer />
        <PostContainer 
          posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
