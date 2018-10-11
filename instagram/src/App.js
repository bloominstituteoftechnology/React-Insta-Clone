import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabfainstagram } from '@fortawesome/free-solid-svg-icons'

library.add(fabfainstagram)

library.add(fabfainstagram)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
<SearchBar/>
        </header>
      </div>
    );
  }
}

export default App;
