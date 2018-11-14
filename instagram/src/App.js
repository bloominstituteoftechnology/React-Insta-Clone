import React, { Component } from 'react';

// import Posts from './components/Posts/Posts';
// import Header from './components/Header/Header';

import Authenticate from './components/Authentication/Authenticate';
import PostsPage from './components/PostsPage/PostsPage'
import dummyData from './dummy-data';
import LoginPage from './components/LoginPage/LoginPage'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filter: '',
      commentText: '',
      logedInUser: 'therealbondor'
    }
  }

  componentDidMount(){
    this.setState({
     data: dummyData 
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addNewComment = (event, index) => {
    event.preventDefault();
    
    let newComment = { text: this.state.commentText, username: this.state.logedInUser};
    let newDataState = this.state.data;
    newDataState[index].comments.push(newComment);
    
    this.setState({
      data: newDataState,
      commentText: ''
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
      <LoginPage />
      // <PostsPage 
      //   data={this.getData()}
      //   commentText={this.state.commentText}
      //   handleInputChange={this.handleInputChange}
      //   addNewComment={this.addNewComment}
      //   addLike={this.addLike}
      //   removeComment={this.removeComment}
      //   filter={this.state.filter}
      // />
    );
  }
}

export default Authenticate(App);
