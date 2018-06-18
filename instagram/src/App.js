import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
  super();
  this.state = {
    dummyData: dummyData
  };
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Instagram</h1>
        </header>
        {this.state.dummyData.map(dummyData => {
                    return(
                      <p className="App-intro" key={Math.random()}>
                        Username: {dummyData.username}
                      </p>
                    )
                  })}
      </div>
    );
  }
}

export default App;
