import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import Post from './components/PostContainer/Post'

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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Insta</h1>
        </header>
        <p className="App-intro">
          Search bar
        </p>
        <p className="App-intro">
          Post Container
        </p>
        {/* <PostContainer /> */}
        <PostContainer dummyData={this.state.dummyData}/>
        <p className="App-intro">
          Comment section
        </p>
      </div>
    );
  }
}

export default App;
