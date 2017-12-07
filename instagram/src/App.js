import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'


class App extends Component {
  constructor(){
    super();
    this.state = {data:dummyData}
    // console.log(this.state);
  }
  render() {
    return (
      <div className="App">
      <SearchBar allData={this.state.data} />
      </div>
    );
  }
}

export default App;
