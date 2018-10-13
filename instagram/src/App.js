import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {faCompass} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)
library.add(faCompass)
  library.add(faHeart)
  library.add(faUser)

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
