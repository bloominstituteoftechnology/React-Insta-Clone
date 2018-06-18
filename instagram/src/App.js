import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state= {
      dummyData: dummyData
    }
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Instagram</h1>
          <SearchBar />
          <div>
            
          </div>          
        </header>

        <PostContainer datas={this.state.dummyData} />
      </div>
    );
  }
}

export default App;
