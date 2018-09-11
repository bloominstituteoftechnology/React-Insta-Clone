import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      commentInput: ""
    };
  }
  
  render() {
    return (
      <div className="App">
        <h1>InstaClone</h1>
        <PostContainer data={this.state.data} />
        <CommentSection />
      </div>
    );
  }
}

export default App;
