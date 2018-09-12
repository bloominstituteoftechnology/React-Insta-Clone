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

  addNewComment = event => {
       event.preventDefault();
       if (this.props.comment) {
         this.setState({
           comments: [...this.props.comments, {text:this.props.comments, username: ''}],
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

      <PostContainer handleChange ={this.handleChange} addNewComment={this.addNewComment}  userData = {this.state}/>




      </div>
    );
  }
}

export default App;
