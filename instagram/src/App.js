import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js'
import PostContainer from './components/post/postContainer';
import SearchBar from './components/search/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      post:[],
      filteredPost: []
    };
  }
   componentDidMount(){
      this.setState({post:dummyData})
    };
  
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts = {this.state.post} />
      </div>
    );
  }
}

export default App;
