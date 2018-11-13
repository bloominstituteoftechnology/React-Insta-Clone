import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';
import PostContainer from './components/PostContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: dummyData,
    }
  }


  render() {
    return (
      <div className="App">
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
        <div>
          {<SearchBar />}
        </div>

        <div>
          {this.state.data.map( arg => {
            return <PostContainer arg={arg}/>
          })}
          {/* {<PostContainer data={this.state.data}/>} */}
        </div>


      </div>
    );
  }
}

export default App;
