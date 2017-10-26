import React, { Component } from 'react';
import './App.css';
import postData from './application-data.js';
import PostContainer from './PostContainer.js';
import CommentSection from './CommentSection.js';

class App extends Component {
  constructor() {
    super();
    this.state= {
      postData: [],
      comments: []
  }
}

componentDidMount(){
  this.setState({postData});
}
  render() {
    return (
      <div>
        <PostContainer postData={this.state.postData} />
        <CommentSection comments={this.state.postData} />
      </div>
    );
  }
}

export default App;
