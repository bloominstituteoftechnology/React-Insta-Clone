import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostsContainer/PostsContainer';



class App extends Component {
  constructor(){
    super();
    this.state={
      dummyData:dummyData
    };
  }//constructor

  render() {
    return (
      <div className="App">
        <SearchBar 
          value={this.state.dummyData}
        />
        <PostContainer
          post={this.state.dummyData}
        />
        
      </div>
    );
  }//render
}//App

export default App;
