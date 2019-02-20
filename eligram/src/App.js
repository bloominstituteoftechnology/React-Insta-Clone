import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostsContainer/PostsContainer';
import SearchBar from './components/SearchBar/SearchBar';  


class App extends Component {
 constructor(){
   super();
   this.state = {
     posts: dummy-data
 };
}



  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts = {this.state.posts} />
      
        
      </div>
    );
  }
}

export default App;
