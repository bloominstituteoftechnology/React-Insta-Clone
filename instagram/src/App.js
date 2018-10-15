import React, { Component } from 'react';
import './App.css';
import Search from './components/SearchBar/components/Search';
import Container from './components/PostContainer/components/Container';

import dummyData from './dummy-data';

import './components/SearchBar/components/search.css';
import './components/PostContainer/components/container.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <Search />
        <Container 
        data={this.state.data}/>
      </div>
    );
  }
}

export default App;
