import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {data:dummyData} 
  }
  
  render() {
    
    return (
      <div className="container">
        {this.state.data.map(data => <PostContainer post={data} />)} 
      </div>
    );
  }
}

export default App;
