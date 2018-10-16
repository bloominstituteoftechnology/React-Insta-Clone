import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar";
import CommentSection from "./Components/SearchBar";
import dummyData from './dummy-data';

class App extends Component {
//data 





  render() {
    return (
      <div className="App">
       

          <SearchBar/>


          <CommentSection />

   
      </div>
    );
  }
}

export default App;
