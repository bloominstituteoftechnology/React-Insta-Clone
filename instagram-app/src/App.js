import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
   
   this.setState({data: dummyData})
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