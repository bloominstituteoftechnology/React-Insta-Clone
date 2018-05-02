//Start
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { dummyData } from './dummy-data.js';
import { UserList } from './UserList.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Instagram</h1>
        </header>
        <UserList dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
