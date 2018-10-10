import React, { Component } from 'react';
import PostContainer from './components/PostContainer';

import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor(){
        super();
        this.state={
          postData:{dummyData}
        }
    }
   
  render(){
    return (
      <div className="whole-app">
        <span><SearchBar/></span>
        <span className="post">
       {dummyData.map((post,index)=>{
         return(
           <PostContainer id={index}key={index}post={post}/>
         )
       })}
        </span>
      </div>
    )
  }
}
export default App;    
