import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';
class App extends Component {
  constructor(){
  super();
    this.state={}
  }
  
  

  render() {
    return (
      <div className="App">
      
      <SearchBar/>
      {dummyData.map(item=> {
        return(
        <PostContainer key={item.timestamp}
        post={item}
        />)
        })}
        {dummyData.map(item=>{
        return(
          <CommentSection key={item.timestamp}
          comment={item}
        />)
        })}
      
      <h1>COMMENT</h1>
      </div>
    );
  }
}

export default App;
