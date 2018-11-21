import React, { Component } from 'react';
import './App.css';
// import dummyData from './dummy-data';
import PostPage from './components/PostPage';
import Authenticate from './components/Authentication/Authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }//constructor


  render() {
    return (
      <div className="App">
        <PostPage />
      </div>
    )
  }
}//app


export default Authenticate(App);
