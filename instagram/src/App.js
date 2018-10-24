import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar";
import CommentSection from "./Components/CommentSection";
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer';

class App extends Component {
//data 

constructor() {

  super();
  this.state = {dummyData: dummyData}

};






  render() {
    return (
      <div className="App">
       
<PostContainer/>

          <SearchBar/>


 
         

   
      </div>
    );
  }
}

export default App;
