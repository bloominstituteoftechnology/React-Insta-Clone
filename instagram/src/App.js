import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';


console.log(dummyData);

class App extends Component {

  
  render() {
    return (
      <div className="App">
        
        <SearchBar />
        
      </div>
    );
  }
}

export default App;
