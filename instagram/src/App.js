import React, { Component } from 'react';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsPage/PostsPage'
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filter: '',
      commentText: [],
      logedInUser: localStorage.getItem('user'),
    }
  }

  logOut(){
    localStorage.setItem('user', 'nope');

    this.setState({
      logedInUser: ''
    })
  }

  componentDidMount(){
    this.setState({
     data: dummyData 
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
      });

  }

  handleInputChangeComment = event => {
    let copy = this.state.commentText.slice()
    copy[event.target.name] = event.target.value
    
    this.setState({
      commentText : copy
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    
    let newComment = { text: this.state.commentText[index], username: this.state.logedInUser};
    let newDataState = this.state.data;
    newDataState[index].comments.push(newComment);
    let newCommentArray = this.state.commentText;
    newCommentArray[index] = ''

    this.setState({
      data: newDataState,
      commentText: newCommentArray
    });
  };

  removeComment = (event, parentIndex, childIndex) => {
    event.preventDefault();

    let newDataState = this.state.data;

    newDataState[parentIndex].comments.splice(childIndex, 1);

    this.setState({
      data: newDataState,
    });
  }

  addLike = (event, index) => {
    event.preventDefault();

    let newDataState = this.state.data;
    newDataState[index].likes++;

    this.setState({
      data: newDataState,
    });

  }

  getData () {
    if (this.state.filter === '')
      return this.state.data;
    return this.state.data.filter(post => {
      return JSON.stringify(post).toLowerCase().includes(this.state.filter.toLowerCase());
    })
  }

  render() {
    return (
      <PostsPage 
        data={this.getData()}
        commentText={this.state.commentText}
        handleInputChange={this.handleInputChange}
        handleInputChangeComment={this.handleInputChangeComment}
        addNewComment={this.addNewComment}
        addLike={this.addLike}
        removeComment={this.removeComment}
        filter={this.state.filter}
        logOut={this.logOut}
      />
    );
  }
}

export default Authenticate(App);
