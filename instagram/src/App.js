import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor(){
    super();
    this.state = {data:dummyData}
    // console.log(this.state.data);
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
        {this.state.data.map((obj,index)=> {
         return <PostContainer postData={obj} key={index} />
        })}
      </div>
    );
  }
}

export default App;
