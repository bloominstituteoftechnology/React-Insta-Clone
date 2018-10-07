import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/SearchBar/Search.js';
import dummyData from './dummy-data';

class App extends React.Component {
   constructor() {
    super();

    this.state = {
       data: dummyData
    }
   }

  render() {
    return (
      <div className="App">
        <Search  />
      </div>
    );
  }
}

export default App;
