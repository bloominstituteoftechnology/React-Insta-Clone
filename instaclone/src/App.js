import React, { Component } from 'react';

import dummyData from './dummy-data';

import SearchBar from './Components/SearchBar/SearchBar'
import PostContainer from './Components/PostContainer/PostContainer';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      dummyData:dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <div>
        {this.state.dummyData.map((post,i)=>{
          return <PostContainer key={i}  post={post} />
        })}
        </div>
      </div>
    );
  }
}


export default App;
//do type check at the place you need to display