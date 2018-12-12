import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <SearchBar />
        </nav>
      </div>
    );
  }
}

export default App;
