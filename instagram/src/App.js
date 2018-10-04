import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>instagram</h1>
        {dummyData.map(post=> <div key={post.username}>
          {post.thumbnailUrl}{post.imageUrl}{post.username}
        </div>)}
      </div>
    )
      
      
   
  }
}

export default App;
