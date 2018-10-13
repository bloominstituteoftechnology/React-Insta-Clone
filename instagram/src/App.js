import React, { Component } from 'react';
import './App.css';

import dummyData from './dummy-data';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostContainer/PostsPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <PostsPage data={dummyData} />
      </div>
    );
  }
}

export default Authenticate(App);
