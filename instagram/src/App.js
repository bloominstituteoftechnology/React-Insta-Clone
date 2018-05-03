import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import dummyData from './dummy-data';
import PostContainer from './PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      thumbnailUrl: '',
      imageUrl: '',
      likes: '',
      timestamp: '',
      comments: ''
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Insta-Clone</h1>
        </header>
          <input className='SearchBar' />
          <PostContainer className='PostContainer' />
          
        
      </div>
    );
  }
}

export default App;
