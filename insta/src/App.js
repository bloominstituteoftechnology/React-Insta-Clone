import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from "./components/SearchBar/searchBar";
import PostContainer from './components/PostContainer/PostContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(item =>{
          return(
          <PostContainer key={item.timestamp} obj={item} />
       )})}
      </div>
    );
  }
}

export default App;
