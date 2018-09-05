import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import Comment from './components/CommentSection/Comment.js'
import CommentInput from './components/CommentSection/CommentInput.js'
class App extends Component {
  constructor(props){
    super();
    this.state =  dummyData

  };


  render() {
    return (
      <div className="App">
      <SearchBar />
      <PostContainer NewComment ={this.NewComment} userData = {this.state}/>
<Comment userData = {this.state}/>
         <CommentInput  userData = {this.state.comments} />
      </div>
    );
  }
}

export default App;
