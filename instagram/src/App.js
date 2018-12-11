import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';


class App extends Component {
  constructor (){
    super();
    this.state ={
      dummyData: dummyData
    }
  }
    render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
        <h1 className="searchContainer">Search Container</h1>
        <div>{this.state.dummyData.map( dummyD => 
          <ul key={dummyD.id}>{dummyD.username} {dummyD.likes}</ul>)}</div>
      </div>
    );
  }
}

export default App;
