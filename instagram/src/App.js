import React, { Component } from 'react';
import './App.css';
import PostsPage from "./PostsPage";
import Authenticate from "./components/Authentication/Authenticate";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {};
     
  }

  render(){
    return (
      <div className="App">
        <PostsPage/>
      </div>
    );
  }
  
 }
 
 
 
 
  
export default App;
