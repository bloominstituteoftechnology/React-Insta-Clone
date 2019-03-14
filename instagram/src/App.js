import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Doing work <code>src/App.js</code> and save to reload.
          </p>
          <SearchBar />
        </header>
      </div>
    );
  }
}

export default App;
