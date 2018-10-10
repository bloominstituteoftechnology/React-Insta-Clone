import React, { Component } from 'react';
import Authorization from './components/Authorization/Authorization';
import MainContainer from './components/MainContainer/MainContainer';
import authCheck from './components/Authorization/authCheck';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: undefined,
    }
  }

  render() {
    return (
      <div className="App">
        <CheckAuth username={this.state.username}/>
      </div>
    );
  }
}

const CheckAuth = authCheck(Authorization)(MainContainer);

export default App;
