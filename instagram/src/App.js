import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.data.map((post) => <PostContainer key={post.username} post={post} />)}
      </div>
    );
  }
}

export default App;
//mapping state before we pass it
