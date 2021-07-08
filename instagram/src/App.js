import React, { Component } from 'react';
import dummyData from './dummy-data';
import logo from './logo.svg';
import SearchBar from './components/SearchBar/searchbar.js';
import PostContainer from './components/PostContainer/PostContainer.js';
//import {Card, CardBody, CardTitle, CardImg} from 'reactstrap';

import './App.css';

const App = () => {
  return(
   
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />    
          <h1 className="App-title">Welcome to React</h1> 
        </header>
        <SearchBar /> 
        
        {dummyData.map((post, index) => <PostContainer key={index} props={post}/> )}
            
      </div>
  )   
}

export default App;
