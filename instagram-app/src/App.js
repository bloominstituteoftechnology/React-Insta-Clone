import React, { Component } from 'react';
import logo from './logo.svg';
import instagram from './instagram.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render () {
  return (
    <div className="App">
      <SearchBar />
      {this.state.data.map((data, index) => <PostContainer className="post" data={data} key={index}/>)}
    </div>
  );
}}

export default App;
