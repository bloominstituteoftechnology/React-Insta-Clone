import React, { Component } from 'react';
import dummyData from "./components/data";
import Search from "./components/SearchBar/Search";
import Posts from "./components/PostContainer/Posts";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Posts posts ={dummyData}/>
      </div>
    );
  }
}

export default App;
