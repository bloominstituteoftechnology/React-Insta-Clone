import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments:[],
      search: '',

    }
  }

  inputHandler = event => {
    const value = event.target.value;

    this.setState(
      {search: value}
    );
  }

  render() {
    return(
      <div className="App">
      <SearchBar />

      </div>
    );
  }
}

export default App;
