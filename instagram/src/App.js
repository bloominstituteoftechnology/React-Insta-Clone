import React, { Component } from 'react';
import Posts from './components/PostContainerComponents/Posts';
import Authentication from './components/AuthenticationComponent/Authentication';
import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Posts />
      </div>
    );
  }
}

export default Authentication(App);
