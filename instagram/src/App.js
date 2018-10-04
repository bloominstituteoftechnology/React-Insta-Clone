import React, { Component } from 'react';
import './App.css';
import dummyData from '../../dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor () {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        {dummyData.map(post => <PostContainer post={post}/>)}
      </div>
    );
  }
}

export default App;
