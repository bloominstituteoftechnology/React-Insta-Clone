import React, { Component } from 'react';
import './App.css';
import Authenticate from './components/Authentication/Authentication.js'

class App extends Component {
  constructor() {
    super()
    this.state = {}

  }

  render() {

    return (
      <div></div>
    );
  }
}


export default Authenticate(App);
