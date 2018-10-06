import React, { Component } from 'react';
import PostContainer from './components/PostContainer';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';


class App extends Component {
  constructor(){
        super();
        this.state={
          dummyData:{dummyData}
        }
    }
    componentDidMount(){
      this.setState({dummyData:dummyData})
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
