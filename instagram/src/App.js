import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authentication/Authenticate';



class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }; 
  }



  render() {
    return (
      <div className="App">
 
            <PostPage  />
          
        </div>
    );
  }
}

export default App;
