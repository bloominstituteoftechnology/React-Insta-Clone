import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/searchBar/searchBar';

class App extends Component {
constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
		<SearchBar />
        </header>
        <div className="post">
       
        </div>
      </div>
    );
  }
}

export default App;
