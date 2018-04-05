import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import'./components/SearchBar/SearchBar.css'
import {SearchBar} from './components/SearchBar/SearchBar.js'

class App extends Component {
  render() {
    return (
      <SearchBar classMainDiv="mainDiv" classInstaLogo="instaLogo" className="fab fa-instagram" searchClass="searchStyle" classIconDiv="iconsStyles" classCompass="far fa-compass" classHeart="far fa-heart" classUser="far fa-user"/>

     
    );
  }
}

export default App;
