import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import Authenticate from './authentication/Authenticate';

const AuthenticateContainer= Authenticate(PostContainer);

class App extends Component {
  constructor(){
    super();
    this.state={
      insta_posts:dummyData
    }
  }
  render() {
    return (
      <div className="App">
        
        <AuthenticateContainer />
      </div>
    );
  }
}

export default App;


