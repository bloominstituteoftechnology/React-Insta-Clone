import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      dummyData
    }

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

       {this.state.dummyData.map(dummyData => <PostContainer key={dummyData.timestamp} dummyData={dummyData}/>)}
  
      </div>
    );
  }
}

export default App;
