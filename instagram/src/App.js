import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar'

class App extends Component {
  
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className='header-logo'>
          <img src='imgs/instagram-camera.png' className='logo-camera' alt='insta-camera'>
          <img src='imgs/instagram-logo.svg.png' className='logo-name' alt='header-logo'>
        </div>
        <SearchBar />
        
      </div>
    );
  }
}

export default App;
