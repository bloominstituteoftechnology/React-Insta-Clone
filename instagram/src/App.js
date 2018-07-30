import React, { Component } from 'react';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer />
      </div>
    );
  }
}

export default App;
