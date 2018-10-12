import React, { Component } from 'react';
import dummyData from './dummy-data';
import Header from './Components/SearchBar/Header';
import PostsPage from './Components/PostContainer/PostsPage';

import './Reset.css';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      username: localStorage.getItem('username'),
      searchTerm: '',
      commentText: ''
    }
  }

  addCommentClickHandler = (postID) => {
    if (!this.state.commentText) { 
      return; 
    }

    let username = this.state.username;
    let text = this.state.commentText;
    let comment = {username, text}; 

    this.setState ({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {  // Push the comment to the correct post
          data.comments.push(comment);
          return data;
        }
        return data;
      })
    })
  }

  commentTextOnChange = (event) => {
    this.setState({
      commentText: event.target.value,
    })
  }

  likeClickHandler = (postID) => {
    this.setState({
      data: this.state.data.map(data => {
        if (data.timestamp === postID) {
          data.likes++;
          return data;
        }
        else { return data }
      })
    })
  }

  changeSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData,
        username: localStorage.getItem('username'),
      });
    }, 500);
  }

  login = (event) => {
    event.preventDefault();
  }

  render() {
    if (!this.state.data.length) {
      return (
        <div className="App">
        <Header changeSearchTerm={this.changeSearchTerm} />
        <h1>Loading posts...</h1>
        </div>
      )
    }
    return (
      <div className="App">
        <PostsPage 
        changeSearchTerm={this.changeSearchTerm}
        likeClickHandler={this.likeClickHandler}
        data={this.state.data}
        clickHandler={this.clickHandler}
        commentTextOnChange={this.commentTextOnChange}
        addCommentClickHandler={this.addCommentClickHandler}
        commentText={this.state.commentText}
        searchTerm={this.state.searchTerm}
        />      
      </div>
    );
  }
}



export default App;
