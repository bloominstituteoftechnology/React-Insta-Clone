import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy';
import Posts from './components/Posts';
import DummyData from './components/DummyData';

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
          
          
          {/* <dummyData /> */}
        </header>
        <div>
          <DummyData dummy={this.state.dummyData}/>
          </div>
        {/* {this.state.dummyData.map(post => {
          return <p className="App-intro" key={post.id}> 
          Username: {post.username} Likes: {post.likes} </p>
        })} */}
        
      </div>
    );
  }
}

export default App;
