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
  })
  console.log(this.state);
}


  addNewComment = event => {
       event.preventDefault();
       if (this.props.comment) {
         this.setState({
           comments: [...this.props.comments, {text:this.state.text, username: ''}],
           comments: ""
         });
       }
     };
  handleChange = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
    };
  render() {
    return (
      <div className="App">
      <SearchBar />

      <PostContainer handleChange ={this.handleChange} addNewComment={this.addNewComment}  posts = {this.state.posts}/>




      </div>
    );
  }
}

export default App;
