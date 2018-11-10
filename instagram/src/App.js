import React, { Component } from 'react';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';
import dummyData from './dummy-data';


import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Posts 
            data={this.state.data}
        />  
      </div>
    );
  }
}

export default App;
