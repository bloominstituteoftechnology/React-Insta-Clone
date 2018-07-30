import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';
import dummyData from './dummy-data';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:dummyData
    }
  }
  componentDidMount(){
  }
  loadPosts(){

  return this.state.data.map((element,index) => {
        return <PostContainer key={index} data={element} />
      });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="postsHolder">
        {this.loadPosts()}
        </div>
      </div>
    );
  }
}

export default App;
