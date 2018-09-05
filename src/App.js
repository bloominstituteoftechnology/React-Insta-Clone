import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import dummyData from './dummy-data.js';
import PostContainer from './components/PostContainer/PostContainer.js'
<<<<<<< HEAD
import Comment from './components/CommentSection/Comment.js'
import CommentInput from './components/CommentSection/CommentInput.js'
=======

>>>>>>> parent of 7a75442... add coments section and a bit of a form
class App extends Component {
  constructor(props){
    super();
    this.state =  dummyData

  };


  render() {
    return (
      <div className="App">
      <SearchBar />
<<<<<<< HEAD
      <PostContainer NewComment ={this.NewComment} userData = {this.state}/>
<Comment userData = {this.state}/>
         <CommentInput  userData = {this.state.comments} />
=======
      <PostContainer userData = {this.state}/>
>>>>>>> parent of 7a75442... add coments section and a bit of a form
      </div>
    );
  }
}

export default App;
