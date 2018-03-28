import React, { Component } from 'react';
import './App.css';
import {SearchBar} from './components/SearchBar/SearchBar.js'

class App extends Component {
  render() {
    return (
      // <div className="App">

      // </div>
      <navbar className="Nav__Section">
      <div className="Nav__Logo">
      <img src={require (`./components/media/Insta-Logo.jpg`)} alt="Instagram-Text-Logo" />
      </div>
       <div className="Nav__Search">
        <SearchBar />
       </div>
       <div className="Nav__Icons">
       <img src={require (`./components/media/compass.jpg`)} alt="insta-compass" />
       </div>
       
      </navbar>
    );
  }
}

export default App;
