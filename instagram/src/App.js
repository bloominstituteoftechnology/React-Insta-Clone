import React, { Component } from 'react';
import './App.css';
import dummyData from './data/dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }
  render() {
    console.log(this.state.posts)
    return (
      <div className="App">
        <header className="App-header">
            <div className = "search_bar">
                <SearchBar />
            </div>
        </header>
      </div>
    );
  }
}

export default App;
