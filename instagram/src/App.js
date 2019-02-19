import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: dummyData
    };
  }


  render() {
    return (
      <div className='instaPost'>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <PostContainer dummyData={this.state.dummyData}/>


      </div>
    );
  }
}


export default App;
