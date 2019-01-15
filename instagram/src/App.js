import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import PostContainer from './components/PostContainer';
import dummyData from './dummy-data'
//console.log(dummyData);

class App extends Component {
  constructor(){
    super();
    this.state = {
      mainData: dummyData 
    }
  }
  

render(){
  return(
    <div>
      <SearchBar />
      <PostContainer postsarray = {this.state.mainData} />
    </div>
  )
}


}

export default App;

