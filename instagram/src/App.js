import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import './App.css';
import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData,
      searchInfo: ''
    }
  }

  searchItemHandler =(event)=> {
    this.setState({searchInfo: event.target.value});
  }

  searchSubmitHandler=(event)=> {
    event.preventDefault();
    let myPosts= this.state.posts.filter(item => item.username === this.state.searchInfo);
    console.log(myPosts);
    this.setState({posts: myPosts, searchInfo: ''});
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchItem={this.searchItemHandler} searchValue={this.searchInfo} searchSubmit={this.searchSubmitHandler}/>
        {this.state.posts.map(item => <PostContainer post={item} comments={item.comments} key={item.timestamp} /> )}
      </div>
    );
  }
}

export default App;
