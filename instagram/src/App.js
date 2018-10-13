import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'

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
       {this.state.dummyData.map( post =>{
         return (
           <PostContainer data= {post}
         )
       } )}
      </div>
    );
  }
}

export default App;
