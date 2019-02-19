import React, { Component } from 'react';
import './App.css';
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }

  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.dummyData.map(post => (
          <PostContainer post={post} />
        ))}
      </div>
    );
  }
}

export default App;
