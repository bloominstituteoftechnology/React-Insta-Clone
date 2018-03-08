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
    // const { data } = dummyData;
    // console.log('CDM initialized');
    this.setState({
      objectArray: dummyData,
    });
  }

  render() {
    // console.log('render initialized');
    // console.log(this.state.objectArray);
    return (
      //  this component's div
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-II</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {this.state.objectArray.map( (obj, index) => {
          return (
            <div><PostContainer key={index} thing={obj}/></div>
          );
        })}
      </div>
    );
  }
}

export default App;
