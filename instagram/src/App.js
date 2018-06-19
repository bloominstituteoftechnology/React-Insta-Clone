import React, { Component } from 'react';
import dummyData from './dummy-data';
import Posts from './components/PostsContainer/posts';
import SearchBar from './components/SearchBar/search';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <div className="App-title"><SearchBar /></div>
        </header>
        <div className="primary">
          {this.state.dummyData.map(post => (
              <Posts key={post.timestamp} dummyData={post} />
          ))}
        </div>
        
      </div>
    );
  }
}

export default App;
