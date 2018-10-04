import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCompass,faHeart,faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBarContainer from './components/SearchBar/SearchBarContainer';

library.add(faSearch, faCompass,faHeart,faUser)

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBarContainer  />
      </div>
    );
  }
}

export default App;
