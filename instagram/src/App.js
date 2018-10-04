import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      {console.log(this.state.posts)}
      {this.state.posts.map(data =>(
      <PostContainer postData={data} />
      
      ))
    }
      </div>
    );
  }
}

export default App;
