import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import Posts from './components/PostContainer/posts';
class App extends Component {
  constructor() {
    super();
    this.state = {
      appData: dummyData
    }
    dataFunction() = props => {
      return (
        props.appData.map(dataItem => <Posts />)
      )
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
