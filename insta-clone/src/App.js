import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NOT Instagram</h1>
          <SearchBar />

        </header>


      </div>
    );
  }
}

export default App;
