import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <Posts 
            data={this.state.data}
          />
        </header>
      </div>
    );
  }
}

export default App;
