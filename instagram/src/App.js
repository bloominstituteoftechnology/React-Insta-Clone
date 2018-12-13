import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor() {
    super ();
    this.state = {
      posts: []
    }
  }
   
componentDidMount () {
  this.setState ({posts: dummyData})
}







  render() {
    return (
      <div className="App">
        <PostContainer />
      </div>
    );
  }
}

export default App;
