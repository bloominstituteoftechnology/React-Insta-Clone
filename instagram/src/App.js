import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import SearchBar from './components/SearchBar/SearchBar';
import Posts from './components/Posts';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      dummyData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <header>
          <h1 className="App-title">React Insta Clone</h1>
        </header>
        <div>
        {this.state.dummyData.map(user => {
          return <Posts userData={this.state.dummyData} />
        })}
        </div>
      </div>
    );
  }
}

export default App;
