import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';
import { Postcontainer } from './postcontainer.js';
//import Comments from './comments.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Posts: []
    };
  }

componentDidMount() {
  this.setState ({ Posts: dummyData});
}

  render() {
    return (
      <div>
        <h2>Hello!</h2>
        <Postcontainer dummyData= {this.state.Posts}/>
      </div>
    );
  }
}

export default App;
