import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Instagram</h1>
          
          <dummyData />
        </header>
        {this.state.dummyData.map(post => {
          return <p className="App-intro" key={post.id}> 
          Username: {post.username} Likes: {post.likes}</p>
        })}
        
      </div>
    );
  }
}

export default App;
