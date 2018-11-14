import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import CommentSection from './components/CommentSection/CommentSection';
// import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData,
      comments: dummyData.comments,
    }
  }
  render() {
    return (
      <div className="App">
        <CommentSection data = {this.state.data}/>
        {/* <PostContainer comments = {this.state.comments}/>  */}
      </div>
    );
  }
}

export default App;
