import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      instaData: dummyData, 
      imgAssets: { 
        header: 'This is a test',
      },
    }
  }


  render() {
    return (
      <div className="App">
        <SearchBar instaData = {this.state.instaData} headerImgs={this.state.imgAssets}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {this.state.instaData[0].username}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Clone Instagram!!!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
