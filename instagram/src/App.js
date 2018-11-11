import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      removeThisProp: 'Begin coding for your app'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.removeThisProp}}</h1>
        </header>
      </div>
    );
  }
}

export default App;
