import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from "./components/PostContainer/PostPage";
import Login from "./Login/Login"

class App extends Component {
  constructor(){
  super();
  this.state = {
    dummyData: dummyData
  };
}
  render() {
    return (
      <div className="App">
        <PostPage dummyData={this.state.dummyData}/>
      </div>
    );
  }
}

export default App;
