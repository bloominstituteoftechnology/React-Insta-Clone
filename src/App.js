import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts/Posts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default App;
