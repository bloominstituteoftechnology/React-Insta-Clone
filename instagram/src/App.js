import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummydata from './dummy-data';
import PostContainer from '../src/components/PostContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <ul>
           {dummydata.map(obj=>{
         return <PostContainer key={obj.username} obj={obj} />; 
         })}
        </ul>
        </p>
      </div>
    );
  }
}

export default App;



