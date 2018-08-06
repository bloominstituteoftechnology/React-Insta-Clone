import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Instagram</h1>
        </header>
        <PostContainer posts={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
