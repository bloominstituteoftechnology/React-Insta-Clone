import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import SearchBar from './components/SearchBar/search';
import Posts from './components/PostContainer/posts';

/*The root App component of your application should import the dummy data from the dummy-data.js file with import dummyData from './dummy-data'; and iterate over said data, passing each individual object as a prop to an instance of PostContainer. */



class App extends Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
      <SearchBar />
      <Posts />
      </div>
    );
  }
}

export default App;
