import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBarComponent/search-bar';
import CardContainer from './components/PostComponent/CardContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {data: dummyData};
  }

  render() {
    return (
      <div className="container">
        <SearchBar />
        <CardContainer posts={this.state.data} />
      </div>
    );
    }
}

export default App;
