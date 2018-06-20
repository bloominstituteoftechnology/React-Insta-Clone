import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostPage from "./components/PostContainer/PostPage";
import Login from "./Login/Login"
import Authenticate from "./Authentication/Authenticate"

class App extends Component {
  constructor(){
  super();
  this.state = {
    dummyData: dummyData
  };
  this.login = (username, password) => {
    localStorage.setItem(username, password);
  }
}
  render() {
    return (
      <div className="App">
        <PostPage dummyData={this.state.dummyData}/>
        <Login login={this.login}/>
      </div>
    );
  }
}

export default App;
