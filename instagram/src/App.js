import React, { Component } from 'react';
import logo from './logo.svg';
import dummyData from './dummy-data.js';
import { PostContainer } from './components/PostContainer/PostContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [...dummyData]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {dummyData.map( (post, index) => (<PostContainer userPost={post} key={post.username + index} />))}
        <div>{console.log(dummyData)}</div>
      </div>
    );
  }
}

export default App;
