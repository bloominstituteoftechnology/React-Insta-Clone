import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="App">
        {dummyData.map(post => (
          <PostContainer
            post={post}
            key={post.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default App;
