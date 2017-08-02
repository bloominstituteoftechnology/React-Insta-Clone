import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
