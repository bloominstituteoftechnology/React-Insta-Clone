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
    this.state = {
      posts:[]
    }

  };


componentDidMount(){
  this.setState({
    posts: dummyData,
    comments:'',
  })
  console.log(this.state);
}



  render() {
    return (
      <div className="App">
      <SearchBar />

      <PostContainer handleChange ={this.handleChange} addNewComment={this.addNewComment} comments = {this.state.comments} posts = {this.state.posts}/>




      </div>
    );
  }
}

export default App;
