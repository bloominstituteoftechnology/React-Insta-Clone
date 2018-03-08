import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      objectArray: [],
    }
  }

  componentDidMount() {
    const { data } = dummyData;
    this.setState({
      objectArray: data,
    });
  }

  render() {
    return (
      //  this component's div
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>




        {this.state.objectArray.map(fauxData => {
          return (
            <PostContainer thing={fauxData}/>
          );
        })}
      </div>
    );
  }
}

export default App;
