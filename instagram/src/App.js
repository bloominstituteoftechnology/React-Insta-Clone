import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [dummyData],
    };
  }


  render() {
    return (
      <div className = "App">
        <SearchBar />
        <PostContainer data = {this.state.data}/>
      </div>
    );
    
  };
};

export default App;
