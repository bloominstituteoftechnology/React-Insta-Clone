import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar'
//import PostContainer from '.src/components/PostContainer/PostContainer';

class App extends Component {
  constructor (){
    super();
    this.state ={
      dummyData: dummyData
    }
  }
  render() 	{
  return (
    <div className="App">
    <header className="App-header">
    </header>
      <SearchBar />
    
    </div>
  )
    } 
  } 


export default App;
