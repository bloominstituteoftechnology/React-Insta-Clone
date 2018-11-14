import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Data
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    this.setState({
      posts: dummyData
    })
  }

  render() {
    return (
      <SearchBar />

      <Posts />
    );
  }
}

export default App;
