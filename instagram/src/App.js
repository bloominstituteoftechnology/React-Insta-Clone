import React, { Component } from 'react';
import './App.css';
import { dummyData } from './dummy-data';
import PostContainer from './Components/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';

const app = () => {
  return (
    <div className= "App">
     <SearchBar/>
  {dummyData.map((post, index) => <PostContainer key= {index} postData={post} />)}
  </div>
  );
}

export default App;


