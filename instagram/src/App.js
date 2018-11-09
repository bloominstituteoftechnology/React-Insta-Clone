import React, { Component } from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className='app'>

        <SearchBar />

      </div>
    );
  }
}

export default App;
