import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
//import CommentSection from './components/CommentSection/CommentSection.js';
// will pass to post container

class App extends Component {
    constructor() {
      super();
      this.state = {
        dummyData: dummyData,
      };
    }

    
  render() {
    return (
      <div className="App">
      {
      this.state.dummyData.map((data) =>{
       return( <PostContainer dummyData={data}/>)
      })
      }
      </div>
    );
  }
}

export default App;
