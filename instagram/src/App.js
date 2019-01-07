import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js';


class App extends Component {
  constructor (){
    super();
    this.state ={
      dummyData: []
    }
  }
  componentDidMount() {
    this.setState({dummyData: dummyData})
  }
  render() 	{
  return (
    <div className="App">
      <div className="App-header">
        <SearchBar />
      </div>
      <div className="post">
      <PostContainer dummyData={this.state.dummyData}/>
      </div>
      
    </div>
     )
    } 
  } 


export default App;
