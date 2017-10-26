import React, { Component } from 'react';
import data from './application-data';
import NavBar from './NavBar';
import Post from './Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      postData: [],
      searchInput: ''
    };
  }
  handleSearchChange = (e) => {
    this.setState({ searchInput: e.target.value  });
  }
  handleSearchSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchInput === '') { 
      this.setState({ postData: data });
      return;
    }
    const newPostData = this.state.postData.filter((post)=>{
      // return post.username.includes(this.state.searchInput);
      let result = true;
      this.state.searchInput.split('').forEach((letter, index) => {
        if (post.username[index] !== letter) {
          result = false;
          return;
        }
      });
      return result;
    });
    if (newPostData.length !== 0) {
      this.setState({ postData: newPostData });
    }
  }
  handleCommentSubmit = (value, index) => {
    this.state.postData[index].comments.push({
      username: "Dan",
      text: value
    });
    this.setState({ postData: this.state.postData });
  }
  componentDidMount() {
    this.setState({ postData: data });
  }
  render() {
    return (
      <div className="App">
        <NavBar searchInput={this.state.searchInput} 
                handleSearchChange={this.handleSearchChange}
                handleSearchSubmit={this.handleSearchSubmit}
                 />
        <Post data={this.state.postData}  handleCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default App;
