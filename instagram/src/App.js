import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBarContainer from './components/SearchBar/SearchBarContainer';
import './App.css';

class App extends Component {
constructor(props) {
super();
this.state = {
 data: dummyData,
}

}


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <SearchBarContainer />

        </header>
      
      </div>
    );
  }
}

export default App;
