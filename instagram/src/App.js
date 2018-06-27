import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostsContainer/PostsContainer';



class App extends Component {
  constructor(){
    super();
    this.state={
      posts: dummyData
    };
  }//constructor

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          posts={this.state.posts}
        />
        
      </div>
    );
  }//render
}//App

export default App;
