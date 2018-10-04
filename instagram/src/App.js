import React, { Component } from 'react';
import dummyData from './components/dummy-data'
import SearchBar from './components/Searchbar/SearchBar';


import './App.css';



class App extends Component {
  constructor () {
    super();
    this.state = {
      dummyData: dummyData,
      comment: ''

    }
  }





  render() {
    return (
      <div className='App-container'>
        <SearchBar/>


      </div>

    );

  }
}

export default App;
