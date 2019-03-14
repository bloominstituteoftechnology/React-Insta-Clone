import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    constructor() {
      super();
      this.state = {
        instagram: dummyData 
      };
    }
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.instagram.map(post => 
            <PostContainer post={post} key={post.timestamp} />
          )}
          
        </header>
      </div>
    );
  }
}

export default App;
