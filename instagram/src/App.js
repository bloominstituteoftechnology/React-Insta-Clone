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
          <div className="left-Nav">
            <i class="fab fa-instagram" style={{ fontSize: '50px' }}></i>
            <h1>Instagram</h1>
          </div>
          <SearchBar />
          <div className="right-Nav">
            <i class="far fa-compass" style={{ fontSize: '35px' }}></i>
            <i class="far fa-heart" style={{ fontSize: '35px' }}></i>
            <i class="far fa-user" style={{ fontSize: '35px' }}></i>  
          </div>          
        </header>
        <div className="container">
          <PostContainer datas={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default App;
