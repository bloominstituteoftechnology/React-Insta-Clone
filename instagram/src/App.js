import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './Dummy';
import SearchBar from './components/SearchBar/searchbar';
import PostContainer from './components/PostContainer/postcontainer';

class App extends Component {
  render() {
    return (
      <div className ="app-container">
        <SearchBar />
        <div>
          {dummyData.map(dummyObj =>{
            return(
              <PostContainer dummyObj = {dummyObj} key = {dummyObj.timestamp}/>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
